import React from 'react';
import PropTypes from 'prop-types';
import {reviewCardPropTypes} from '../../prop-types.prop';
import {getRatingPercentage, humanizeDate} from '../../utils/utils';

const ReviewCard = ({review}) => {
  const {
    user,
    comment,
    date,
    rating
  } = review;

  const {
    name,
    avatar
  } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={`${humanizeDate(date, `YYYY-MM-DD`)}`}>{humanizeDate(date, `MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape(
      reviewCardPropTypes.isRequired,
  )
};

export default ReviewCard;
