import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Header from './header';

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
const mockDataEmpty = {
  USER: {
    authorizationStatus: `NO_AUTH`,
    userInfo: {}
  }
};
/* eslint-enable */
describe(`Render 'Header' with different isAuth status`, () => {
  it(`Render 'Header'`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore(mockData)}>
          <Router history={history}>
            <Header />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-logo`)).toBeInTheDocument();
    expect(screen.getByTestId(`user-avatar`)).toBeInTheDocument();
    expect(
        screen.getByText(`${mockData.USER.userInfo.email}`)
    ).toBeInTheDocument();
  });

  it(`Render 'Header' for no auth`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore(mockDataEmpty)}>
          <Router history={history}>
            <Header />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-logo`)).toBeInTheDocument();
    expect(screen.getByTestId(`user-avatar`)).toBeInTheDocument();
    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });
});
