import React from 'react';
import PropTypes from 'prop-types';
import {reviewCardPropTypes} from '../../prop-types.prop';
import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';

const ReviewsList = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewCard key={review.id} review={review} />
        )}
      </ul>
      <ReviewForm/>
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(
          reviewCardPropTypes,
      ),
  ).isRequired
};

export default ReviewsList;
