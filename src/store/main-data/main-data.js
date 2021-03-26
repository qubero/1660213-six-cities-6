import {createReducer} from '@reduxjs/toolkit';
import {changeSort, changeCity} from '../action';
import {CityNames, SortType} from '../../const';

const initialState = {
  activeSort: SortType.POPULAR,
  activeCity: CityNames.PARIS,
};

const mainData = createReducer(initialState, (builder) => {
  builder.addCase(changeSort, (state, action) => {
    state.activeSort = action.payload;
  });
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });
});

export {mainData};
