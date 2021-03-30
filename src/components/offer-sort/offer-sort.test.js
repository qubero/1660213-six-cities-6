import React from 'react';
import {Router} from 'react-router';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {SortType} from '../../const';
import OfferSort from './offer-sort';

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
  },
  MAIN: {
    activeSort: `Popular`
  }
};
/* eslint-enable */

it(`Render 'OfferSort'`, () => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore(mockData)}>
        <Router history={history}>
          <OfferSort />
        </Router>
      </redux.Provider>
  );

  const sortSpan = screen.getByTestId(`sort-span`);

  expect(screen.getByText(`Sort by`)).toBeInTheDocument();
  expect(sortSpan).toBeInTheDocument();
  expect(sortSpan).toContainHTML(`Popular`);
  userEvent.click(sortSpan);
  expect(
      screen.getByTestId(`places-options`)
  ).toHaveClass(`places__options--opened`);

  for (const item of Object.values(SortType)) {
    expect(screen.getByTestId(item)).toBeInTheDocument();
  }
});
