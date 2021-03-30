import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';

import {adaptReviewsToClient} from '../../utils/utils';
import ReviewCard from './review-card';
// eslint-disable-next-line
const mockReviews = adaptReviewsToClient([{"id":1,"user":{"id":18,"is_pro":true,"name":"Sophie","avatar_url":"https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg"},"rating":2,"comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.","date":"2021-03-07T08:04:28.647Z"}]);

it(`Render 'ReviewCard'`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <ReviewCard review={mockReviews[0]} />
      </Router>
  );

  expect(
      screen.getByAltText(`Reviews avatar`)
  ).toHaveAttribute(`src`, mockReviews[0].user.avatar);
  expect(screen.getByTestId(`reviews-text`)).toContainHTML(mockReviews[0].comment);
  expect(screen.getByTestId(`reviews-time`)).toContainHTML(`March 2021`);
});
