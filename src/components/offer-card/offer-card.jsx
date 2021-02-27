import React from 'react';
import {Link} from 'react-router-dom';
import {OfferCardType, OfferImageMap} from '../../const';
import PropTypes from 'prop-types';
import {offerCardPropTypes} from '../../prop-types.prop';
import {getRatingPercentage} from '../../utils/utils';

const noop = () => { };

const OfferCard = ({offer, offerCardType, onOfferHover = noop, onOfferBlur = noop}) => {
  const {
    id,
    type,
    title,
    price,
    rating,
    isFavorite,
    isPremium,
    image
  } = offer;

  const offerLink = `/offer/${id}`;

  return (
    <article
      onFocus={() => onOfferHover(id)}
      onMouseEnter={() => onOfferHover(id)}
      onBlur={() => onOfferBlur()}
      onMouseLeave={() => onOfferBlur()}
      className={`place-card ${offerCardType}`}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${OfferImageMap.get(offerCardType).class}`}>
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={image}
            width={OfferImageMap.get(offerCardType).size[0]}
            height={OfferImageMap.get(offerCardType).size[1]}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`place-card__info ${offerCardType === OfferCardType.FAVORITES ? `favorites__card-info` : ``}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape(
      offerCardPropTypes.isRequired,
  ),
  offerCardType: PropTypes.string.isRequired,
  onOfferHover: PropTypes.func,
  onOfferBlur: PropTypes.func
};

export default OfferCard;
