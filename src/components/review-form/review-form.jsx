import React, {Fragment, useState} from 'react';

const starsTitles = [
  `terribly`,
  `badly`,
  `not bad`,
  `good`,
  `perfect`
];

const ReviewForm = () => {
  const [userForm, setUserForm] = useState({
    rating: 0,
    review: ``,
  });

  const {rating, review} = userForm;

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
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
              />
              <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={title}>
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
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
