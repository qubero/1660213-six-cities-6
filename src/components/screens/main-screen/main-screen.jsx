import React, {useState, useEffect} from 'react';
import Header from '../../header/header';
import Map from '../../map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import OfferSort from '../../offer-sort/offer-sort';
import OffersListProxy from '../../offers-list-proxy/offers-list-proxy';
import {OfferCardType} from '../../../const';
import CityList from '../../city-list/city-list';
import {getOffersByCity, getSortedOffers} from '../../../utils/utils';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {mainScreenPropTypes} from '../../../prop-types.prop';
import {fetchOffersList} from '../../../store/api-actions';

const MainScreen = ({offers, isOffersLoaded, onLoadOffers, activeCity}) => {
  const [activeOfferId, setActiveOfferId] = useState(null);

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadOffers();
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
      <main className={classNames(`page__main page__main--index`, {'page__main--index-empty': !offers.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        {offers.length
          ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <OfferSort />
                <OffersListProxy
                  className={`cities__places-list  tabs__content`}
                  offers={offers}
                  offerCardType={OfferCardType.CITIES}
                  setActiveOfferId={setActiveOfferId}
                />
              </section>
              <div className="cities__right-section">
                <Map city={offers[0].city} offers={offers} activeOfferId={activeOfferId} isMainScreen />
              </div>
            </div>
          </div>
          :
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
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

MainScreen.propTypes = mainScreenPropTypes;

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: getSortedOffers(getOffersByCity(state.offers, state.activeCity), state.activeSort),
  isOffersLoaded: state.isOffersLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchOffersList());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
