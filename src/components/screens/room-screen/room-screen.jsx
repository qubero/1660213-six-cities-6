import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import classNames from 'classnames';

import {fetchOffer, fetchNearbyList, fetchOfferReviews} from '../../../store/api-actions';
import {clearOffer} from '../../../store/action';
import {getRatingPercentage, getFirstLetterUppercase} from '../../../utils/utils';
import {FetchStatus} from '../../../const';
import {useIsFavorite} from '../../../hooks/use-is-favorite';

import Header from '../../header/header';
import ReviewsList from '../../reviews-list/reviews-list';
import Map from '../../map/map';
import OfferHost from '../../offer-host/offer-host';
import OffersNearbyList from '../../offers-nearby-list/offers-nearby-list';
import OfferGalleryList from '../../offer-gallery-list/offer-gallery-list';
import OfferServicesList from '../../offer-services-list.jsx/offer-services-list';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const RoomScreen = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const offer = useSelector(({OFFER}) => OFFER.offer);
  const nearby = useSelector(({OFFER}) => OFFER.nearby);
  const fetchStatus = useSelector(({OFFER}) => OFFER.fetchStatus);

  const [isFavorite, handleFavoriteClick] = useIsFavorite(offer.isFavorite);

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyList(id));
    dispatch(fetchOfferReviews(id));

    return () => {
      dispatch(clearOffer());
    };
  }, [id]);

  if (fetchStatus === FetchStatus.PENDING) {
    return (
      <LoadingScreen />
    );
  }

  if (fetchStatus === FetchStatus.ERROR) {
    return <NotFoundScreen />;
  }

  const {
    type,
    title,
    description,
    price,
    rating,
    isPremium,
    galleryList,
    bedrooms,
    maxAdults,
    services,
    host,
    city
  } = offer;

  return (
    !!Object.keys(offer).length &&
      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property" data-testid="property-section">
            <OfferGalleryList images={galleryList} />
            <div
              className="property__container container"
              data-testid="property-container"
            >
              <div className="property__wrapper">
                {isPremium &&
                  <div className="property__mark" data-testid="property-mark">
                    <span>Premium</span>
                  </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button
                    className={classNames(
                        `property__bookmark-button button`,
                        {'property__bookmark-button--active': isFavorite}
                    )}
                    type="button"
                    onClick={() => handleFavoriteClick(id, !isFavorite)}
                    data-testid="property-bookmark-button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: getRatingPercentage(rating)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {getFirstLetterUppercase(type)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <OfferServicesList services={services} />
                <OfferHost host={host} description={description} />
                <ReviewsList id={id} />
              </div>
            </div>
            <Map city={city} offers={nearby} />
          </section>
          <div className="container">
            {nearby &&
              <OffersNearbyList offers={nearby}/>
            }
          </div>
        </main>
      </div>
  );
};

export {RoomScreen};
export default RoomScreen;
