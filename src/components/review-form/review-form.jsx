import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {sendOfferReview} from '../../store/api-actions';
import {getFormFetchStatus} from '../../store/fetch-process/selectors';
import {FetchStatus} from '../../const';

const starsTitles = [
  `terribly`,
  `badly`,
  `not bad`,
  `good`,
  `perfect`
];

const ReviewLimit = {
  MIN_CHARS: 50,
  MAX_CHARS: 300
};

const formStub = {
  rating: 0,
  review: ``,
};

const ReviewForm = ({id: currentId}) => {
  const dispatch = useDispatch();

  const fetchStatus = useSelector(getFormFetchStatus);
  const [disabled, setDisabled] = useState(true);
  const [formDisabled, setFormDisabled] = useState(false);
  const [userForm, setUserForm] = useState(formStub);
  const {rating, review} = userForm;

  useEffect(() => {
    setDisabled(!rating
      || review.length < ReviewLimit.MIN_CHARS
      || review.length > ReviewLimit.MAX_CHARS
    );
  }, [userForm]);

  useEffect(() => {
    switch (fetchStatus) {
      case FetchStatus.ERROR:
        // eslint-disable-next-line
        alert(`Sumbit review failed`);
        setFormDisabled(false);
        break;
      case FetchStatus.DONE:
        setUserForm(formStub);
        setFormDisabled(false);
        break;
    }
  }, [fetchStatus]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormDisabled(true);
    dispatch(sendOfferReview(currentId, userForm));
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: name === `rating` ? +value : value});
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
      disabled={formDisabled}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div
        className="reviews__rating-form form__rating"
        data-testid="form-rating"
      >
        {starsTitles.map((title, index) => {
          const id = index + 1;

          return (
            <Fragment key={title} >
              <input
                className="form__rating-input visually-hidden"
                id={`${id}-stars`}
                name="rating"
                type="radio"
                value={id}
                checked={id === rating}
                onChange={handleFieldChange}
                disabled={formDisabled}
                data-testid={`${id}-stars`}
              />
              <label
                htmlFor={`${id}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        }).reverse()}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleFieldChange}
        minLength={ReviewLimit.MIN_CHARS}
        maxLength={ReviewLimit.MAX_CHARS}
        disabled={formDisabled}
        data-testid="review"
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formDisabled || disabled}
          data-testid="review-submit"
        >Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired
};

export {ReviewForm};
export default ReviewForm;
