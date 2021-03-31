import React from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {AuthorizationStatus} from '../../const';
import Header from './header';

const mockStore = configureStore({});

describe(`Render 'Header' with different isAuth status`, () => {
  it(`Render 'Header' for authored user`, () => {
    const history = createMemoryHistory();
    const mockUser = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {
        id: 1,
        avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
        email: `mail@gmail.com`,
        isPro: false,
        name: ``
      }
    };
    const store = mockStore({USER: mockUser});

    render(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-logo`)).toBeInTheDocument();
    expect(screen.getByTestId(`user-avatar`)).toBeInTheDocument();
    expect(screen.getByText(mockUser.userInfo.email)).toBeInTheDocument();
  });

  it(`Render 'Header' for no auth user`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: {}
      }
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-logo`)).toBeInTheDocument();
    expect(screen.getByTestId(`user-avatar`)).toBeInTheDocument();
    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });
});
