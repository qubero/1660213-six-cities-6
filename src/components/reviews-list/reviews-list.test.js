import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';

import {adaptReviewsToClient} from '../../utils/utils';
import ReviewsList from './reviews-list';

const mockStore = configureStore();
/* eslint-disable */
const mockData = {
  USER: {
    authorizationStatus: `AUTH`,
  },
  OFFER: {
    reviews: adaptReviewsToClient([{"id":1,"user":{"id":18,"is_pro":true,"name":"Sophie","avatar_url":"https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg"},"rating":2,"comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.","date":"2021-03-07T08:04:28.647Z"}]),
  }
};
/* eslint-enable */
it(`Render 'ReviewsList'`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore(mockData)}>
        <Router history={history}>
          <ReviewsList id={`1`} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`reviews-title`)).toContainHTML(`<h2 class="reviews__title" data-testid="reviews-title">Reviews · <span class="reviews__amount">1</span></h2>`);

  for (const item of mockData.OFFER.reviews) {
    expect(screen.getByTestId(`reviews-item-${item.id}`)).toBeInTheDocument();
  }

  expect(screen.getByText(`Your review`)).toBeInTheDocument();
});
