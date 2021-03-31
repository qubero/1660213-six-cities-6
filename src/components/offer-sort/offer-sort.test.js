import React from 'react';
import {Router} from 'react-router';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {SortType} from '../../const';
import OfferSort from './offer-sort';

const mockStore = configureStore({});

it(`Render 'OfferSort'`, () => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);

  const sortTypes = Object.values(SortType);
  const history = createMemoryHistory();
  const store = mockStore({
    MAIN: {activeSort: sortTypes[0]}
  });

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <OfferSort />
        </Router>
      </redux.Provider>
  );

  const sortSpan = screen.getByTestId(`sort-span`);

  expect(screen.getByText(`Sort by`)).toBeInTheDocument();
  expect(sortSpan).toBeInTheDocument();
  expect(sortSpan).toContainHTML(sortTypes[0]);
  userEvent.click(sortSpan);
  expect(
      screen.getByTestId(`places-options`)
  ).toHaveClass(`places__options--opened`);

  for (const item of sortTypes) {
    expect(screen.getByTestId(item)).toBeInTheDocument();
  }

  userEvent.click(screen.getByTestId(sortTypes[1]));
  expect(
      screen.getByTestId(`places-options`)
  ).not.toHaveClass(`places__options--opened`);
});
