import {mainData} from './main-data';
import {SortType, CityNames} from '../../const';
import {changeCity, changeSort} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(mainData(undefined, {}))
      .toEqual({
        activeSort: SortType.POPULAR,
        activeCity: CityNames.PARIS,
      });
  });
  it(`Reducer should change active city`, () => {
    const state = {
      activeCity: `Paris`
    };
    expect(mainData(state, changeCity(`Amsterdam`)))
      .toEqual({
        activeCity: `Amsterdam`,
      });
  });
  it(`Reducer should change active sort`, () => {
    const state = {
      activeSort: `Popular`
    };
    expect(mainData(state, changeSort(`Price`)))
      .toEqual({
        activeSort: `Price`
      });
  });
});
