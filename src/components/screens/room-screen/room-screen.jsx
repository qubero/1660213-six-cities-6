import React from 'react';
import Header from '../../header/header';
import ReviewsList from '../../reviews-list/reviews-list';
import {reviewCards} from '../../../mocks/reviews';
import Map from '../../map/map';
import OfferHost from '../../offer-host/offer-host';
import OffersNearbyList from '../../offers-nearby-list/offers-nearby-list';
import OfferGalleryList from '../../offer-gallery-list/offer-gallery-list';
import OfferServicesList from '../../offer-services-list.jsx/offer-services-list';
import {offerCards} from '../../../mocks/offers';
import {getRatingPercentage, getFirstLetterUppercase} from '../../../utils/utils';

const RoomScreen = () => {
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
    host
  } = offerCards[0];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <OfferGalleryList images={galleryList} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
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
                <span className="property__rating-value rating__value">{rating}</span>
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
              <ReviewsList reviews={reviewCards} />
            </div>
          </div>
          <Map city={offerCards[0].city} offers={offerCards.slice(0, 3)} />
        </section>
        <div className="container">
          <OffersNearbyList offers={offerCards.slice(0, 3)} />
        </div>
      </main>
    </div>
  );
};

export default RoomScreen;
