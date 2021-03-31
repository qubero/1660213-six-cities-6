import React from 'react';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {renderHook, act} from '@testing-library/react-hooks';
import {useIsFavorite} from './use-is-favorite';

const api = {
  get: jest.fn(() => Promise.resolve()),
  post: jest.fn(() => Promise.resolve())
};

const middleWare = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleWare);

let favoriteMock = null;
const mockData = {
  USER: {
    authorizationStatus: `AUTH`
  }
};

describe(`useIsFavorite tests`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  beforeAll(() => {
    favoriteMock = true;
  });

  it(`useIsFavorite should return array with 2 elements`, () => {
    const {result} = renderHook(() => useIsFavorite(favoriteMock), {
      /* eslint-disable */
      wrapper: (props) => (
        <redux.Provider store={mockStore(mockData)}>
          {props.children}
        </redux.Provider>
      ),
      /* eslint-enable */
    });

    const {current} = result;
    const [isFavorite, handleFavoriteClick] = current;

    expect(current).toHaveLength(2);
    expect(isFavorite).toBeTruthy();
    expect(handleFavoriteClick).toBeInstanceOf(Function);
  });

  it(`useIsFavorite should correctly change state`, () => {
    const {result} = renderHook(() => useIsFavorite(favoriteMock), {
      /* eslint-disable */
      wrapper: (props) => (
        <redux.Provider store={mockStore(mockData)}>
          {props.children}
        </redux.Provider>
      ),
      /* eslint-enable */
    });

    let [, handleFavoriteClick] = result.current;
    act(() => handleFavoriteClick(1, false));

    const [isFavorite] = result.current;
    expect(isFavorite).toBe(false);
  });
});
