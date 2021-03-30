import React from 'react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import LoadingScreen from './loading-screen';

const mockStore = configureStore();

it(`Render 'LoadingScreen'`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <LoadingScreen />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Loading...`)).toBeInTheDocument();
});
