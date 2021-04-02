import {createReducer} from '@reduxjs/toolkit';
import {
  loadOffers,
  setActiveOffer,
  updateOffers,
  loadFavoriteOffers
} from '../action';
import {adaptOffersToClient, adaptOfferToClient} from '../../utils/utils';

const initialState = {
  offers: [],
  isOffersLoaded: false,
  activeOfferId: null,
  favoriteOffers: [],
  isFavoriteOffersLoaded: false
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.isOffersLoaded = true;
    state.offers = adaptOffersToClient(action.payload);
  });
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOfferId = action.payload;
  });
  builder.addCase(updateOffers, (state, action) => {
    const newOffer = adaptOfferToClient(action.payload);
    const newOffers = [...state.offers];
    const newFavoriteOffers = [...state.favoriteOffers];

    let index = newOffers.map((offer) => offer.id).indexOf(newOffer.id);
    newOffers[index] = newOffer;

    if (newOffer.isFavorite) {
      newFavoriteOffers.push(newOffer);
    } else {
      index = newFavoriteOffers.map((offer) => offer.id).indexOf(newOffer.id);
      newFavoriteOffers.splice(index, 1);
    }

    state.offers = newOffers;
    state.favoriteOffers = newFavoriteOffers;
  });
  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.isFavoriteOffersLoaded = true;
    state.favoriteOffers = adaptOffersToClient(action.payload);
  });
});

export {offersData};
