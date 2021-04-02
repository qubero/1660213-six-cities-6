import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {getSortedOffers, getOffersByCity} from '../../utils/utils';
import {getActiveCity, getActiveSort} from '../main-data/selectors';

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getIsOffersLoaded = (state) => state[NameSpace.OFFERS].isOffersLoaded;
export const getFavoriteOffers = (state) => state[NameSpace.OFFERS].favoriteOffers;
export const getIsFavoriteOffersLoaded = (state) => state[NameSpace.OFFERS].isFavoriteOffersLoaded;

export const getCurrentFavoriteOffers = createSelector(
    [getFavoriteOffers, getIsFavoriteOffersLoaded],
    (offers, isOffersLoaded) => {
      return {offers, isOffersLoaded};
    }
);

export const getCurrentOffers = createSelector(
    [getOffers, getIsOffersLoaded, getActiveCity, getActiveSort],
    (currentOffers, isOffersLoaded, activeCity, activeSort) => {
      const offers = getSortedOffers(
          getOffersByCity(currentOffers, activeCity), activeSort
      );

      return {offers, isOffersLoaded};
    }
);
