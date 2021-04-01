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
const mockOffers = [
  {
    id: 1,
    type: `room`,
    title: `The house among olive`,
    description: `Design interior in most sympathetic area!`,
    price: 159,
    rating: 4.4,
    isFavorite: true,
    isPremium: false,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    galleryList: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
    ],
    bedrooms: 1,
    maxAdults: 1,
    services: [`Laptop friendly workspace`],
    city: {
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      },
      name: `Paris`
    },
    location: {latitude: 48.861610000000006, longitude: 2.340499, zoom: 16},
    host: {
      id: 25,
      isPro: true,
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`
    }
  }
];

const mockData = {
  USER: {
    authorizationStatus: `AUTH`
  },
  OFFERS: {
    offers: mockOffers
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
