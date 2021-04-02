import React from 'react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from './review-form';

const mockStore = configureStore({});

it(`Render 'ReviewForm'`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    FETCH: {
      fetchStatus: `Done`,
      formFetchStatus: `Done`
    }
  });

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ReviewForm id={`1`} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Your review`)).toBeInTheDocument();
  expect(screen.getByTestId(`form-rating`)).toBeInTheDocument();
  expect(screen.getByTestId(`review`)).toBeInTheDocument();
  expect(screen.getByTestId(`review-submit`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`review`), `Lorem`);
  expect(screen.getByDisplayValue(`Lorem`)).toBeInTheDocument();

  userEvent.click(screen.getByTestId(`4-stars`));
  expect(screen.getByTestId(`4-stars`)).toBeChecked();
});
