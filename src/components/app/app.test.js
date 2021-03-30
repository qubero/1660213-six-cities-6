import React from 'react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';

import {adaptOffersToClient} from '../../utils/utils';
import MainScreen from '../screens/main-screen/main-screen';
import AuthScreen from '../screens/auth-screen/auth-screen';
import FavoritesScreen from '../screens/favorites-screen/favorites-screen';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';

const mockStore = configureStore();
const history = createMemoryHistory();
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
  OFFERS: {
    offers: adaptOffersToClient([{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":12}]),
    isOffersLoaded: true
  },
  OFFER: {
    offer: adaptOffersToClient([{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":12}])[0],
    isOfferLoaded: true,
    reviews: [],
    nearby: [],
    isNearbyLoaded: true
  },
  MAIN: {
    activeCity: `Paris`
  }
};
/* eslint-enable */
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainScreen' when user navigate to '/' url`, () => {
    render(
        <redux.Provider store={mockStore(mockData)}>
          <Router history={history}>
            <MainScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`page-main`)).toBeInTheDocument();
    expect(screen.getByText(`Cities`)).toBeInTheDocument();
    expect(screen.getByText(`Places`)).toBeInTheDocument();
    expect(
        screen.getByTestId(`location-card-${mockData.OFFERS.offers[0].id}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId(`map`)).toBeInTheDocument();
  });

  // TODO: hook test
  // it(`Render 'RoomScreen' when user navigate to '/offer/:id' url`, () => {
  //   history.push(`/offer/1`);

  //   render(
  //       <redux.Provider store={mockStore(mockData)}>
  //         <MemoryRouter history={history}>
  //           <RoomScreen />
  //         </MemoryRouter>
  //       </redux.Provider>
  //   );

  //   expect(screen.getByTestId(`header`)).toBeInTheDocument();
  //   expect(
  //       screen.getByText(mockData.OFFERS.offers[0].description)
  //   ).toBeInTheDocument();
  //   expect(screen.getByTestId(`map`)).toBeInTheDocument();
  //   expect(screen.getByTestId(`footer`)).toBeInTheDocument();
  // });

  it(`Render 'AuthScreen' when user navigate to '/login' url`, () => {
    const store = {
      MAIN: {
        activeCity: ``
      },
      USER: {
        authorizationStatus: `NO_AUTH`,
        userInfo: {}
      }
    };
    history.push(`/login`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <AuthScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`signin`)).toBeInTheDocument();
    expect(screen.getByTestId(`signin-submit`)).toBeInTheDocument();
    expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'FavoritesScreen' when user navigate to '/favorites' url`, () => {
    history.push(`/favorites`);

    render(
        <redux.Provider store={mockStore(mockData)}>
          <Router history={history}>
            <FavoritesScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
    expect(screen.getByTestId(`location-card-12`)).toBeInTheDocument();
    expect(screen.getByTestId(`location-link-Paris`)).toBeInTheDocument();
    expect(screen.getByTestId(`footer`)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to non-exist route`, () => {
    history.push(`/non-exist`);

    render(
        <redux.Provider store={mockStore(mockData)}>
          <Router history={history}>
            <NotFoundScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`not-found`)).toBeInTheDocument();
    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Back to homepage`)).toBeInTheDocument();
  });
});
