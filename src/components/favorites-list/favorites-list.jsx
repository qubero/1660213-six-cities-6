import React from 'react';
import {Link} from 'react-router-dom';
import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import {groupByKey} from '../../utils/utils';
import {offersListPropTypes} from '../../prop-types.prop';

const FavoritesList = ({offers}) => {
  const offersByCity = groupByKey(offers, `city.name`);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(offersByCity).map(([key, value]) => (
          <li key={key} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link
                  className="locations__item-link"
                  to="#"
                  data-testid={`location-link-${key}`}
                >
                  <span>{key}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {value.map((offer) =>
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  offerCardType={OfferCardType.FAVORITES}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = offersListPropTypes;

export default FavoritesList;
