import React from 'react';
import {Link} from 'react-router-dom';
import {OfferCardType} from '../../const';
import PropTypes from 'prop-types';
import {offerCardPropTypes} from '../../prop-types.prop';
import {getRatingPercentage} from '../../utils/utils';

const noop = () => { };

const OfferCard = ({offer, offerCardType, onOfferHover = noop}) => {
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

  const getArticleClassByType = (cardType) => {
    switch (cardType) {
      case OfferCardType.ROOM:
        return `near-places__card`;
      case OfferCardType.CITIES:
        return `cities__place-card`;
      case OfferCardType.FAVORITES:
        return `favorites__card`;
      default:
        return ``;
    }
  };

  const getOfferImageByType = (cardType) => {
    switch (cardType) {
      case OfferCardType.ROOM:
        return (
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <Link to={offerLink}>
              <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
            </Link>
          </div>
        );
      case OfferCardType.CITIES:
        return (
          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to={offerLink}>
              <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
            </Link>
          </div>
        );
      case OfferCardType.FAVORITES:
        return (
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={offerLink}>
              <img className="place-card__image" src={image} width="150" height="110" alt="Place image" />
            </Link>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <article
      onFocus={() => onOfferHover(id)}
      onMouseEnter={() => onOfferHover(id)}
      className={`place-card ${getArticleClassByType(offerCardType)}`}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      {getOfferImageByType(offerCardType)}
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
  onOfferHover: PropTypes.func
};

export default OfferCard;
