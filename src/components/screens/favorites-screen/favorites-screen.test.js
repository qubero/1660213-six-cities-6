import React from 'react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {AuthorizationStatus} from '../../../const';
import FavoritesScreen from './favorites-screen';

const api = {
  get: jest.fn(() => Promise.resolve()),
};

const middleWare = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleWare);
const mockOffers = [
  {
    id: 1,
    type: `room`,
    title: `The house among olive`,
    description: `Design interior in most sympathetic area!`,
    price: 159,
    rating: 4.4,
    isFavorite: true,
    isPremium: true,
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

describe(`Should render 'FavoritesScreen' correctly with filled or empty favorite list `, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'FavoritesScreen' with filled favorite list`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
          email: `mail@gmail.com`,
          id: 1,
          isPro: false,
          name: `mail`
        }
      },
      OFFERS: {
        offers: mockOffers,
        isOffersLoaded: true,
        favoriteOffers: mockOffers,
        isFavoriteOffersLoaded: true
      },
      FETCH: {
        fetchStatus: `Done`,
        formFetchStatus: `Done`
      }
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoritesScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
    expect(screen.getByTestId(`location-card-1`)).toBeInTheDocument();
    expect(screen.getByTestId(`location-link-Paris`)).toBeInTheDocument();
    expect(screen.getByTestId(`footer`)).toBeInTheDocument();
  });

  it(`Render 'FavoritesScreen' with empty favorite list`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
          email: `mail@gmail.com`,
          id: 1,
          isPro: false,
          name: `mail`
        }
      },
      OFFERS: {
        offers: [],
        isOffersLoaded: true,
        favoriteOffers: [],
        isFavoriteOffersLoaded: true
      },
      FETCH: {
        fetchStatus: `Done`,
        formFetchStatus: `Done`
      }
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoritesScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`favorites-empty`)).toBeInTheDocument();
  });
});
