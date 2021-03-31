import React from 'react';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route} from 'react-router';
import {AuthorizationStatus} from '../../../const';
import RoomScreen from './room-screen';

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
    location: {
      latitude: 48.861610000000006,
      longitude: 2.340499,
      zoom: 16
    },
    host: {
      id: 25,
      isPro: true,
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`
    }
  },
  {
    id: 2,
    type: `room`,
    title: `The house among olive`,
    description: `Design interior in most sympathetic area!`,
    price: 159,
    rating: 4.4,
    isFavorite: false,
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
      isPro: false,
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`
    }
  }
];

const mockDataAllTrue = {
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
    isOffersLoaded: true
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

const mockDataAllFalse = {
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
    isOffersLoaded: true
  },
  OFFER: {
    offer: mockOffers[1],
    isOfferLoaded: true,
    reviews: [],
    nearby: [],
    isNearbyLoaded: true
  },
  MAIN: {
    activeCity: `Paris`
  }
};

describe(`Should render 'RoomScreen' correctly with different params`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'RoomScreen' when params 'isFavorite', 'isPremium' and 'isPro' is true`, () => {
    const store = mockStore(mockDataAllTrue);

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
    expect(screen.getByTestId(`property-section`)).toBeInTheDocument();
    expect(screen.getByTestId(`property-gallery`)).toBeInTheDocument();
    expect(
        screen.getByTestId(`property-container`)
    ).toContainElement(screen.getByTestId(`property-mark`));
    expect(
        screen.getByTestId(`property-bookmark-button`)
    ).toHaveClass(`property__bookmark-button--active`);
    expect(screen.getByTestId(`map`)).toBeInTheDocument();
    expect(
        screen.getByTestId(`property-avatar`)
    ).toHaveClass(`property__avatar-wrapper--pro`);

    expect(
        screen.getByText(`${mockDataAllTrue.OFFER.offer.description}`)
    ).toBeInTheDocument();
    expect(
        screen.getByText(`${mockDataAllTrue.OFFER.offer.bedrooms} Bedrooms`)
    ).toBeInTheDocument();
    expect(
        screen.getByText(`Max ${mockDataAllTrue.OFFER.offer.maxAdults} adults`)
    ).toBeInTheDocument();
    expect(
        screen.getByText(`€${mockDataAllTrue.OFFER.offer.price}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Meet the host`)).toBeInTheDocument();
    expect(
        screen.getByText(`${mockDataAllTrue.OFFER.offer.host.name}`)
    ).toBeInTheDocument();
    expect(
        screen.getByTestId(`reviews-title`)
    ).toHaveTextContent(`Reviews · ${mockDataAllTrue.OFFER.reviews.length}`);

    expect(
        screen.getByText(`Other places in the neighbourhood`)
    ).toBeInTheDocument();
  });

  it(`Render 'OfferProperty' when parameters 'isFavorite', 'isPremium' and 'isPro' is false`, () => {
    const store = mockStore(mockDataAllFalse);

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/offer/2`]}>
            <Route path="/offer/:id">
              <RoomScreen />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(
        screen.getByTestId(`property-container`)
    ).not.toHaveTextContent(`Premium`);
    expect(
        screen.getByTestId(`property-bookmark-button`)
    ).not.toHaveClass(`property__bookmark-button--active`);
    expect(
        screen.getByTestId(`property-avatar`)
    ).not.toHaveClass(`property__avatar-wrapper--pro`);
  });
});
