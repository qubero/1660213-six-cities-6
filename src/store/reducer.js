import {CityNames, SortType} from '../const';
import {ActionType} from './action';
import {offerCards as offers} from '../mocks/offers';

const initialState = {
  activeSort: SortType.POPULAR,
  activeCity: CityNames.PARIS,
  offers
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
  }

  return state;
};

export {reducer};
