import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {offerCardPropTypes} from '../../prop-types.prop';
import {OfferCardType, OfferImageMap} from '../../const';
import {setActiveOffer} from '../../store/action';
import {getRatingPercentage} from '../../utils/utils';
import {useIsFavorite} from '../../hooks/use-is-favorite';

const OfferCard = ({
  offer,
  offerCardType
}) => {

  const {
    id,
    type,
    title,
    price,
    rating,
    isPremium,
    image
  } = offer;

  const offerLink = `/offer/${id}`;
  const [isFavorite, handleFavoriteClick] = useIsFavorite(offer.isFavorite);

  const dispatch = useDispatch();
  const handleActiveOfferId = (offerId) => {
    dispatch(setActiveOffer(offerId));
  };

  return (
    <article
      onFocus={() => handleActiveOfferId(id)}
      onMouseEnter={() => handleActiveOfferId(id)}
      onBlur={() => handleActiveOfferId(null)}
      onMouseLeave={() => handleActiveOfferId(null)}
      className={`place-card ${offerCardType}`}
      data-testid={`location-card-${id}`}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={
        `place-card__image-wrapper ${OfferImageMap.get(offerCardType).class}`
      }>
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
      <div
        className={classNames(`place-card__info`, {
          'favorites__card-info': offerCardType === OfferCardType.FAVORITES
        })}
        data-testid={`offer-card-type-${id}`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames(`place-card__bookmark-button button`, {
              'place-card__bookmark-button--active': isFavorite
            })}
            type="button"
            onClick={() => handleFavoriteClick(id, !isFavorite)}
            data-testid={`offer-card-bookmark-button`}
          >
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
  offerCardType: PropTypes.string.isRequired
};

export default OfferCard;
