import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getIsAuth} from '../../store/user/selectors';
import {getReviews} from '../../store/offer-data/selectors';
import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';

const sortByDate = (itemA, itemB) => (
  new Date(itemB.date) - new Date(itemA.date)
);

const ReviewsList = ({id}) => {
  const isAuth = useSelector(getIsAuth);
  const reviews = useSelector(getReviews);
  const currentReviews = reviews.slice().sort(sortByDate).slice(0, 9);

  return (
    <section className="property__reviews reviews">
      <h2
        className="reviews__title"
        data-testid="reviews-title"
      >
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {currentReviews.map((review) =>
          <ReviewCard key={review.id} review={review} />
        )}
      </ul>
      {isAuth && <ReviewForm id={id} />}
    </section>
  );
};

ReviewsList.propTypes = {
  id: PropTypes.string.isRequired
};

export default ReviewsList;
