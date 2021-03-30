import React from 'react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import NotFoundScreen from './not-found-screen';

const mockStore = configureStore();
/* eslint-disable */
const mockData = {
  USER: {
    authorizationStatus: `AUTH`,
    userInfo: {
      avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg",
      email: "mail@gmail.com",
      id: 1,
      is_pro: false,
      name: "mail"
    }
  }
};
/* eslint-enable */
it(`Render 'NotFoundScreen'`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore(mockData)}>
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
