import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';

import {adaptOffersToClient} from '../../utils/utils';
import OffersNearbyList from './offers-nearby-list';

const mockStore = configureStore();
const mockData = {
  MAIN: {
    activeCity: `Paris`
  },
  USER: {
    authorizationStatus: `AUTH`,
  }
};
// eslint-disable-next-line
const mockOffers = adaptOffersToClient([{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":1}]);

it(`Render 'OffersNearbyList'`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore(mockData)}>
        <Router history={history}>
          <OffersNearbyList offers={mockOffers} />
        </Router>
      </redux.Provider>
  );

  expect(
      screen.getByText(`Other places in the neighbourhood`)
  ).toBeInTheDocument();

  for (const item of mockOffers) {
    expect(screen.getByTestId(`location-card-${item.id}`)).toBeInTheDocument();
  }
});
