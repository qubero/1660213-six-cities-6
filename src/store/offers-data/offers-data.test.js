import {offersData} from './offers-data';
import {setActiveOffer, loadOffers, updateOffers} from '../action';
import {adaptOffersToClient} from '../../utils/utils';

// eslint-disable-next-line
const mockOffers = [{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":false,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":12}];

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(offersData(undefined, {}))
      .toEqual({
        offers: [],
        isOffersLoaded: false,
        activeOfferId: null,
      });
  });
  it(`Reducer should change offers and load status`, () => {
    const state = {
      offers: [],
      isOffersLoaded: false
    };
    expect(offersData(state, loadOffers(mockOffers)))
      .toEqual({
        offers: adaptOffersToClient(mockOffers),
        isOffersLoaded: true
      });
  });
  it(`Reducer should update offers`, () => {
    const state = {
      offers: adaptOffersToClient(mockOffers)
    };
    expect(offersData(
        state,
        updateOffers(adaptOffersToClient(mockOffers))
    )).toEqual({
      offers: state.offers,
    });
  });
  it(`Reducer should change active offer id`, () => {
    const state = {
      activeOfferId: null
    };
    expect(offersData(state, setActiveOffer(1)))
      .toEqual({
        activeOfferId: 1
      });
  });
});
