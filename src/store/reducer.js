import {CityNames, SortType, AuthorizationStatus} from '../const';
import {ActionType} from './action';
import {adaptOffersToClient} from '../utils/utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
  activeSort: SortType.POPULAR,
  activeCity: CityNames.PARIS,
  offers: [],
  isOffersLoaded: false,
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
  }

  return state;
};

export {reducer};
