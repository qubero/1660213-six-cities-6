import React from 'react';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router, MemoryRouter, Route} from 'react-router';

import {AuthorizationStatus} from '../../const';
import MainScreen from '../screens/main-screen/main-screen';
import AuthScreen from '../screens/auth-screen/auth-screen';
import FavoritesScreen from '../screens/favorites-screen/favorites-screen';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';
import RoomScreen from '../screens/room-screen/room-screen';

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

const mockData = {
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
  FETCH: {
    fetchStatus: `Done`,
    formFetchStatus: `Done`,
  },
  OFFERS: {
    offers: mockOffers,
    isOffersLoaded: true,
    favoriteOffers: mockOffers,
    isFavoriteOffersLoaded: true
  },
  OFFER: {
    offer: mockOffers[0],
    isOfferLoaded: true,
    reviews: [],
    nearby: [],
    isNearbyLoaded: true
  },
  MAIN: {
    activeCity: `Paris`
  }
};

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainScreen' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockData);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`page-main`)).toBeInTheDocument();
    expect(screen.getByText(`Cities`)).toBeInTheDocument();
    expect(screen.getByText(`Places`)).toBeInTheDocument();
    expect(
        screen.getByTestId(`location-card-${mockData.OFFERS.offers[0].id}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId(`map`)).toBeInTheDocument();
  });

  it(`Render 'RoomScreen' when user navigate to '/offer/:id' url`, () => {
    const store = mockStore(mockData);

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/offer/1`]}>
            <Route path="/offer/:id">
              <RoomScreen />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(
        screen.getByText(mockData.OFFERS.offers[0].description)
    ).toBeInTheDocument();
    expect(screen.getByTestId(`map`)).toBeInTheDocument();
  });

  it(`Render 'AuthScreen' when user navigate to '/login' url`, () => {
    const store = mockStore({
      MAIN: {
        activeCity: ``
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: {}
      }
    });
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <AuthScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`signin`)).toBeInTheDocument();
    expect(screen.getByTestId(`signin-submit`)).toBeInTheDocument();
    expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'FavoritesScreen' when user navigate to '/favorites' url`, () => {
    const store = mockStore(mockData);
    const history = createMemoryHistory();
    history.push(`/favorites`);

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

  it(`Render 'NotFoundScreen' when user navigate to non-exist route`, () => {
    const store = mockStore(mockData);
    const history = createMemoryHistory();
    history.push(`/non-exist`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <NotFoundScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`not-found`)).toBeInTheDocument();
    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Back to homepage`)).toBeInTheDocument();
  });
});
