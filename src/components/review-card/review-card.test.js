import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import ReviewCard from './review-card';

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
