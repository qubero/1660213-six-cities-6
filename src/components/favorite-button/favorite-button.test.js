import React from 'react';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import userEvent from '@testing-library/user-event';
import {AuthorizationStatus} from '../../const';
import BookmarkButton from './favorite-button';

const api = {
  post: jest.fn(() => Promise.resolve()),
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

it(`Render 'FavoriteButton'`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  const history = createMemoryHistory();
  const store = mockStore({
    MAIN: {activeCity: `Paris`},
    USER: {authorizationStatus: AuthorizationStatus.AUTH},
    OFFERS: {offers: mockOffers}
  });

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <BookmarkButton
            id={`1`}
            offerIsFavorite={true}
          />
        </Router>
      </redux.Provider>
  );

  const bookmarkBtn = screen.getByTestId(`property-bookmark-button`);

  expect(bookmarkBtn).toBeInTheDocument();
  expect(bookmarkBtn).toHaveClass(`property__bookmark-button--active`);
  userEvent.click(bookmarkBtn);
  expect(bookmarkBtn).not.toHaveClass(`property__bookmark-button--active`);
});
