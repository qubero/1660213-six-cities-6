import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORT: `sort/changeSort`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  SET_USER_INFO: `user/setUserInfo`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_OFFER: `offers/loadOffer`,
  LOAD_NEARBY: `offers/loadNearby`,
  LOAD_REVIEWS: `offers/loadReviews`,
  CLEAR_OFFER: `offers/clearOffer`,
  CHANGE_FETCH_STATUS: `fetch/changeStatus`
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => {
  return {
    payload: city
  };
});

export const changeSort = createAction(ActionType.CHANGE_SORT, (sortType) => {
  return {
    payload: sortType
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => {
  return {
    payload: status
  };
});

export const setUserInfo = createAction(ActionType.SET_USER_INFO, (info) => {
  return {
    payload: info
  };
});

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => {
  return {
    payload: offer
  };
});

export const loadNearby = createAction(ActionType.LOAD_NEARBY, (offers) => {
  return {
    payload: offers
  };
});

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => {
  return {
    payload: reviews
  };
});

export const clearOffer = createAction(ActionType.CLEAR_OFFER);

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (status) => {
  return {
    payload: status
  };
});
