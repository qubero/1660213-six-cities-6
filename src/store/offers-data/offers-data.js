import {createReducer} from '@reduxjs/toolkit';
import {loadOffers} from '../action';
import {adaptOffersToClient} from '../../utils/utils';

const initialState = {
  offers: [],
  isOffersLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.isOffersLoaded = true;
    state.offers = adaptOffersToClient(action.payload);
  });
});

export {offersData};
