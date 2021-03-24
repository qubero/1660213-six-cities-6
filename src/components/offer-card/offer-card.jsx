import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {offerCardPropTypes} from '../../prop-types.prop';
import {OfferCardType, OfferImageMap, AuthorizationStatus} from '../../const';
import {getRatingPercentage} from '../../utils/utils';
import {sendFavoriteStatus} from '../../store/api-actions';

const noop = () => { };

const OfferCard = ({offer, offerCardType, onOfferHover = noop, onOfferBlur = noop}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) =>
    state.authorizationStatus === AuthorizationStatus.AUTH
  );

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
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);

  useEffect(() => {
    setIsFavorite(offer.isFavorite);
  }, [offer]);

  const handleFavoriteClick = (id, status) => {
    if (!isAuth) {
      history.push(AppRoutes.LOGIN);
    } else {
      dispatch(sendFavoriteStatus(id, +status));
      setIsFavorite(status);
    }
  };

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
      <div
        className={classNames(`place-card__info`, {
          'favorites__card-info': offerCardType === OfferCardType.FAVORITES
        })}
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
            disabled={!isAuth}
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
  offerCardType: PropTypes.string.isRequired,
  onOfferHover: PropTypes.func,
  onOfferBlur: PropTypes.func
};

export default OfferCard;
