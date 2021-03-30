import React from 'react';
import {MemoryRouter} from 'react-router';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import {
  adaptOfferToClient,
  adaptOffersToClient,
  adaptReviewsToClient
} from '../../../utils/utils';
import RoomScreen from './room-screen';

const mockStore = configureStore();
/* eslint-disable */
const mockOfferData1 = {
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
  OFFER: {
    offer: adaptOfferToClient({"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":true,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":1}),
    isOfferLoaded: true,
    nearby: adaptOffersToClient([{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":true,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":1}]),
    isNearbyLoaded: true,
    reviews: adaptReviewsToClient([{"id":1,"user":{"id":18,"is_pro":true,"name":"Sophie","avatar_url":"https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg"},"rating":2,"comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.","date":"2021-03-07T08:04:28.647Z"}]),
  },
  OFFERS: {
    activeOfferId: null
  }
};

// const mockOfferData2 = {
//   USER: {
//     authorizationStatus: `AUTH`,
//     userInfo: {
//       avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg",
//       email: "mail@gmail.com",
//       id: 1,
//       is_pro: false,
//       name: "mail"
//     }
//   },
//   OFFER: {
//     offer: adaptOffersToClient({"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":true,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":1})
//   }
// };
// const mockOfferData3 = {
//   USER: {
//     authorizationStatus: `AUTH`,
//     userInfo: {
//       avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg",
//       email: "mail@gmail.com",
//       id: 1,
//       is_pro: false,
//       name: "mail"
//     }
//   },
//   OFFER: {
//     offer: adaptOffersToClient({"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":true,"is_premium":true,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":1})
//   }
// };
/* eslint-enable */
describe(`Should render 'RoomScreen' correctly with different params`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'RoomScreen' when params 'isFavorite', 'isPremium' and 'isPro' is true`, () => {
    const history = createMemoryHistory();
    history.push(`/offer/${mockOfferData1.OFFER.offer.id}`);

    render(
        <redux.Provider store={mockStore(mockOfferData1)}>
          <MemoryRouter history={history}>
            <RoomScreen />
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`property-section`)).toBeInTheDocument();
    expect(screen.getByTestId(`property-gallery`)).toBeInTheDocument();
    expect(screen.getByTestId(`property-container`))
      .toContainElement(screen.getByTestId(`property-mark`));
    expect(screen.getByTestId(`property-bookmark-button`))
      .toHaveClass(`property__bookmark-button--active`);
    expect(screen.getByTestId(`map`)).toBeInTheDocument();

    expect(screen.getByTestId(`offer-property-user`))
      .toContainElement(
          screen.getByTestId(`offer-property-user-pro`
      ));
    expect(screen.getByTestId(`card-1`)).toBeInTheDocument();

    expect(
        screen.getByText(`${mockOfferData1.OFFER.offer.description}`)
    ).toBeInTheDocument();
    expect(
        screen.getByText(`${mockOfferData1.OFFER.offer.bedrooms} Bedrooms`)
    ).toBeInTheDocument();
    expect(
        screen.getByText(`Max ${mockOfferData1.OFFER.offer.maxAdults} adults`)
    ).toBeInTheDocument();
    expect(
        screen.getByText(`€${mockOfferData1.OFFER.offer.price}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Meet the host`)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockOfferData1.OFFER.offer.host.name}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Reviews ·`)).toBeInTheDocument();
    expect(screen.getByTestId(`review-count`)).toContainHTML(`1`);

    expect(
        screen.getByText(`Other places in the neighbourhood`
    )).toBeInTheDocument();
  });

  it(`Render 'OfferProperty' when parameters 'isFavorite', 'isPremium' and 'isPro' is false`, () => {
    const history = createMemoryHistory();
    history.push(`/offer/3`);

    render(
        <redux.Provider store={mockStore(testDataVer2)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`offer-property`)).toBeInTheDocument();
    expect(screen.getByTestId(`property-wrapper`)).not.toContainHTML(`<div className="property__mark" data-testid="property-mark"></div>`);
    expect(screen.getByTestId(`offer-property-bookmark`)).not.toHaveClass(`property__bookmark-button--active`);
    expect(screen.getByTestId(`offer-property-user`)).not.toContainHTML(`<span className="property__user-status" data-testid="offer-property-user-pro">Pro</span>`);
  });
});
