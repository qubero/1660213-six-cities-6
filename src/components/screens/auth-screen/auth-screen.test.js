import React from 'react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AuthScreen from './auth-screen';

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
it(`Render 'AuthScreen' when user navigate to '/login' url`, () => {
  const history = createMemoryHistory();
  history.push(`/login`);

  render(
      <redux.Provider store={mockStore(mockData)}>
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

  userEvent.type(screen.getByTestId(`input-email`), `mail@mail`);
  userEvent.type(screen.getByTestId(`input-password`), `pass`);

  expect(screen.getByDisplayValue(`mail@mail`)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`pass`)).toBeInTheDocument();
});
