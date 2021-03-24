import {CityNames, SortType, AuthorizationStatus, FetchStatus} from '../const';
import {ActionType} from './action';
import {adaptOfferToClient, adaptOffersToClient, adaptReviewsToClient} from '../utils/utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
  activeSort: SortType.POPULAR,
  activeCity: CityNames.PARIS,
  offers: [],
  isOffersLoaded: false,
  offer: {},
  isOfferLoaded: false,
  nearby: [],
  isNearbyLoaded: false,
  reviews: [],
  favoriteOffers: [],
  fetchStatus: FetchStatus.PENDING
};

const reducer = (state = initialState, action) => {  
  switch (action.type) {
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        activeSort: action.payload
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffersToClient(action.payload),
        isOffersLoaded: true
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: adaptOfferToClient(action.payload),
        isOfferLoaded: true
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearby: adaptOffersToClient(action.payload),
        isNearbyLoaded: true
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: adaptReviewsToClient(action.payload)
      };
    case ActionType.CLEAR_OFFER:
      return {
        ...state,
        offer: {},
        isOfferLoaded: false,
        nearby: [],
        isNearbyLoaded: false,
        reviews: []
      };
    case ActionType.CHANGE_FETCH_STATUS:
      return {
        ...state,
        fetchStatus: action.payload
      };
  }

  return state;
};

export {reducer};
