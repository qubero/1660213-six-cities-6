import {createReducer} from '@reduxjs/toolkit';
import {loadOffer, loadNearby, loadReviews, clearOffer} from '../action';
import {
  adaptOfferToClient,
  adaptOffersToClient,
  adaptReviewsToClient
} from '../../utils/utils';

const initialState = {
  offer: {},
  isOfferLoaded: false,
  nearby: [],
  isNearbyLoaded: false,
  reviews: [],
};

const offerData = createReducer(initialState, (builder) => {
  builder.addCase(loadOffer, (state, action) => {
    state.isOfferLoaded = true;
    state.offer = adaptOfferToClient(action.payload);
  });
  builder.addCase(loadNearby, (state, action) => {
    state.isNearbyLoaded = true;
    state.nearby = adaptOffersToClient(action.payload);
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = adaptReviewsToClient(action.payload);
  });
  builder.addCase(clearOffer, (state) => {
    state.offer = {};
    state.isOfferLoaded = false;
    state.nearby = [];
    state.isNearbyLoaded = false;
    state.reviews = [];
  });
});

export {offerData};
