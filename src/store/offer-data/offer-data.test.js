import {offerData} from './offer-data';
import {loadOffer, loadNearby, loadReviews} from '../action';
import {adaptOfferToClient, adaptOffersToClient, adaptReviewsToClient} from '../../utils/utils';

// eslint-disable-next-line
const mockOffers = [{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":false,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":12}];
// eslint-disable-next-line
const mockReviews = [{"id":1,"user":{"id":18,"is_pro":true,"name":"Sophie","avatar_url":"https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg"},"rating":2,"comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.","date":"2021-03-07T08:04:28.647Z"}];

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(offerData(undefined, {}))
      .toEqual({
        offer: {},
        isOfferLoaded: false,
        nearby: [],
        isNearbyLoaded: false,
        reviews: [],
      });
  });
  it(`Reducer should change offer and load status`, () => {
    const state = {
      offer: {},
      isOfferLoaded: false
    };
    expect(offerData(state, loadOffer(mockOffers[0])))
      .toEqual({
        offer: adaptOfferToClient(mockOffers[0]),
        isOfferLoaded: true
      });
  });
  it(`Reducer should change nearby and load status`, () => {
    const state = {
      nearby: [],
      isNearbyLoaded: false
    };
    expect(offerData(state, loadNearby(mockOffers)))
      .toEqual({
        nearby: adaptOffersToClient(mockOffers),
        isNearbyLoaded: true
      });
  });
  it(`Reducer should change reviews`, () => {
    const state = {
      reviews: []
    };
    expect(offerData(state, loadReviews(mockReviews)))
      .toEqual({
        reviews: adaptReviewsToClient(mockReviews)
      });
  });
});
