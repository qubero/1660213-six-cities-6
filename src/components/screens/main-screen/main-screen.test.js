import React from 'react';
import {Router} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import MainScreen from './main-screen';
import {adaptOffersToClient} from '../../../utils/utils';

const mockStore = configureStore();
/* eslint-disable */
const mockData = {
  MAIN: {
    activeCity: `Paris`
  },
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
  OFFERS: {
    offers: adaptOffersToClient([{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":1}]),
    isOffersLoaded: true,
  }
};
const mockDataEmpty = {
  MAIN: {
    activeCity: `Paris`
  },
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
  OFFERS: {
    offers: [],
    isOffersLoaded: true,
  }
};
/* eslint-enable */
describe(`Should render 'MainScreen' correctly with filled or empty offers list `, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainScreen' with filled offers list`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore(mockData)}>
          <Router history={history}>
            <MainScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByText(
        `${mockData.OFFERS.offers.length} places to stay in Paris`
    )).toBeInTheDocument();
    expect(screen.getByTestId(`location-card-1`)).toBeInTheDocument();
  });

  it(`Render 'MainScreen' with empty offers list`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore(mockDataEmpty)}>
          <Router history={history}>
            <MainScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByText(`No places to stay available`))
      .toBeInTheDocument();
  });
});
