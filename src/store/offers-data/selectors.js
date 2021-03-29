import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {getSortedOffers, getOffersByCity} from '../../utils/utils';
import {getActiveCity, getActiveSort} from '../main-data/selectors';

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getIsOffersLoaded = (state) => state[NameSpace.OFFERS].isOffersLoaded;

export const getCurrentOffers = createSelector(
    [getOffers, getIsOffersLoaded, getActiveCity, getActiveSort],
    (currentOffers, isOffersLoaded, activeCity, activeSort) => {
      const offers = getSortedOffers(
          getOffersByCity(currentOffers, activeCity), activeSort
      );

      return {offers, isOffersLoaded};
    }
);

export const getFavoriteOffers = createSelector(
    [getOffers],
    (offers) => offers.filter((offer) => offer.isFavorite)
);
