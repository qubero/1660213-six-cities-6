import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import FavoritesEmpty from './favorites-empty';

it(`Render 'FavoritesEmpty'`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <FavoritesEmpty />
      </Router>
  );

  expect(screen.getByTestId(`favorites-empty`)).toBeInTheDocument();
  expect(screen.getByText(`Nothing yet saved.`)).toBeInTheDocument();
});
