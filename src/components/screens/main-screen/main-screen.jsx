import React from 'react';
import Header from '../../header/header';
import Map from '../../map/map';
import OffersListProxy from '../../offers-list-proxy/offers-list-proxy';
import {OfferCardType} from '../../../const';
import CityList from '../../city-list/city-list';
import {getOffersByCity} from '../../../utils/utils';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {offersListWithCityPropTypes} from '../../../prop-types.prop';

const MainScreen = ({offers, activeCity}) => {
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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <OffersListProxy offers={offers} offerCardType={OfferCardType.CITIES} className={`cities__places-list  tabs__content`} />
              </section>
              <div className="cities__right-section">
                <Map city={offers[0].city} offers={offers} isMainScreen />
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

MainScreen.propTypes = offersListWithCityPropTypes;

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: getOffersByCity(state.offers, state.activeCity)
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
