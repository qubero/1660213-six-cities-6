import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import Map from './map';

const mockStore = configureStore({});
let store;
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

describe(`Render 'Map' with different params`, () => {
  beforeAll(() => {
    store = mockStore({
      OFFERS: {activeOfferId: 1}
    });
  });

  it(`Render 'Map'`, () => {
    render(
        <Provider store={store}>
          <Map city={mockOffers[0].city} offers={mockOffers}/>
        </Provider>
    );

    expect(screen.getByTestId(`map`)).toBeInTheDocument();
    expect(screen.getByTestId(`map`)).toHaveClass(`property__map`);
  });

  it(`Render 'Map' with param isMainScreen === true`, () => {
    render(
        <Provider store={store}>
          <Map city={mockOffers[0].city} offers={mockOffers} isMainScreen/>
        </Provider>
    );

    expect(screen.getByTestId(`map`)).toBeInTheDocument();
    expect(screen.getByTestId(`map`)).toHaveClass(`cities__map`);
  });
});
