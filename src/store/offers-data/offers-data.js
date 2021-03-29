import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, setActiveOffer} from '../action';
import {adaptOffersToClient} from '../../utils/utils';

const initialState = {
  offers: [],
  isOffersLoaded: false,
  activeOfferId: null,
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.isOffersLoaded = true;
    state.offers = adaptOffersToClient(action.payload);
  });
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOfferId = action.payload;
  });
});

export {offersData};
