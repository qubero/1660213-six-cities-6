import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import OfferCard from '../offer-card/offer-card';
import {OfferCardType, AppRoutes} from '../../const';
import {groupByKey} from '../../utils/utils';
import {changeCity} from '../../store/action';
import {offersListPropTypes} from '../../prop-types.prop';

const FavoritesList = ({offers}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const offersByCity = groupByKey(offers);

  const handleCityClick = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(evt.target.innerText));
    history.push(AppRoutes.ROOT);
  };

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(offersByCity).map(([key, value]) => (
          <li key={key} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a
                  className="locations__item-link"
                  onClick={handleCityClick}
                  data-testid={`location-link-${key}`}
                >
                  {key}
                </a>
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
