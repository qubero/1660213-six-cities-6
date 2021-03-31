import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {CityNames} from '../../const';
import CityList from './city-list';

const mockStore = configureStore();
const mockData = {
  MAIN: {
    activeCity: `Paris`
  }
};

it(`Render 'CityList'`, () => {
  render(
      <redux.Provider store={mockStore(mockData)}>
        <CityList />
      </redux.Provider>
  );

  for (const item of Object.values(CityNames)) {
    expect(screen.getByText(item)).toBeInTheDocument();
  }
});
