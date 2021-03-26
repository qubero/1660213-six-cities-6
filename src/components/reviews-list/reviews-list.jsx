import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus} from '../../const';

const ReviewsList = ({id}) => {
  const isAuth = useSelector(({USER}) =>
    USER.authorizationStatus === AuthorizationStatus.AUTH
  );
  const reviews = useSelector(({OFFER}) => OFFER.reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
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
