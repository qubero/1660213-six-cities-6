import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {CityNames} from '../../const';
import CityList from './city-list';

const mockStore = configureStore({});

it(`Render 'CityList'`, () => {
  const cities = Object.values(CityNames);
  const store = mockStore({
    MAIN: {activeCity: cities[0]}
  });

  render(
      <Provider store={store}>
        <CityList />
      </Provider>
  );

  for (const item of cities) {
    expect(screen.getByText(item)).toBeInTheDocument();
  }
});
