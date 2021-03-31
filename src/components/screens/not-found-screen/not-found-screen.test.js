import React from 'react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import NotFoundScreen from './not-found-screen';
import {AuthorizationStatus} from '../../../const';

const mockStore = configureStore({});

it(`Render 'NotFoundScreen'`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {
        avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
        email: `mail@gmail.com`,
        id: 1,
        isPro: false,
        name: `mail`
      }
    }
  });
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
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
