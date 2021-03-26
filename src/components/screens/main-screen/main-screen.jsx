import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';

import {OfferCardType} from '../../../const';
import {fetchOffersList} from '../../../store/api-actions';
import {getCurrentOffers} from '../../../store/offers-data/selectors';

import Header from '../../header/header';
import Map from '../../map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import OfferSort from '../../offer-sort/offer-sort';
import OffersListProxy from '../../offers-list-proxy/offers-list-proxy';
import CityList from '../../city-list/city-list';

const MainScreen = () => {
  const dispatch = useDispatch();

  const {activeCity} = useSelector((state) => state.MAIN);
  const {offers, isOffersLoaded} = useSelector(getCurrentOffers);

  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchOffersList());
    }
  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={classNames(
            `page__main page__main--index`,
            {'page__main--index-empty': !offers.length}
        )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        {offers.length
          ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in {activeCity}
                </b>
                <OfferSort />
                <OffersListProxy
                  className={`cities__places-list  tabs__content`}
                  offers={offers}
                  offerCardType={OfferCardType.CITIES}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  city={offers[0].city}
                  offers={offers}
                  isMainScreen
                />
              </div>
            </div>
          </div>
          :
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {activeCity}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        }
      </main>
    </div>
  );
};

export {MainScreen};
export default MainScreen;
