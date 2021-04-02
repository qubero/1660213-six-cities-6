import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import {AuthorizationStatus} from '../../const';
import ReviewsList from './reviews-list';

const mockStore = configureStore({});
const mockReviews = [
  {
    id: 1,
    comment: `Beautiful space, fantastic location and atmosphere.`,
    date: `2021-03-07T08:04:28.647Z`,
    rating: 2,
    user: {
      id: 18,
      isPro: true,
      name: `Sophie`,
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`
    }
  }
];

it(`Render 'ReviewsList'`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  const history = createMemoryHistory();
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH},
    OFFER: {reviews: mockReviews},
    FETCH: {
      fetchStatus: `Done`,
      formFetchStatus: `Done`
    }
  });

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ReviewsList id={`1`} />
        </Router>
      </redux.Provider>
  );

  expect(
      screen.getByTestId(`reviews-title`)
  ).toHaveTextContent(`Reviews · ${mockReviews.length}`);

  for (const item of mockReviews) {
    expect(screen.getByTestId(`reviews-item-${item.id}`)).toBeInTheDocument();
  }

  expect(screen.getByText(`Your review`)).toBeInTheDocument();
});
