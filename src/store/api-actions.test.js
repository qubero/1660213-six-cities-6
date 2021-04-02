import MockAdapter from 'axios-mock-adapter';
import {
  APIRoutes, AuthorizationStatus, FetchStatus
} from '../const';
import {
  createAPI
} from './../services/api';
import {
  ActionType
} from './action';
import {
  fetchOffersList,
  fetchNearbyList,
  fetchOffer,
  fetchOfferReviews,
  checkAuth,
  login,
  sendOfferReview,
  sendFavoriteStatus
} from './api-actions';

const api = createAPI(() => { });

/* eslint-disable */
const mockOffers = [{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":false,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":12}];

const mockReviews = [{
  "comment": `Lorem`,
  "date": `2019-05-08T14:13:56.569Z`,
  "id": 1,
  "rating": 4
}];

const mockUserInfo = {
  avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg",
  email: "mail@gmail.com",
  id: 1,
  is_pro: false,
  name: "mail"
};
/* eslint-enable */

const mockReview = {review: `Lorem`, rating: 4};

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login to check authorization status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchCheckAuth = checkAuth();

    apiMock
      .onGet(APIRoutes.LOGIN)
      .reply(200, mockUserInfo);

    return fetchCheckAuth(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: mockUserInfo
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchLogin = login({
      email: `mail@mail`,
      password: `pass`
    });

    apiMock
      .onPost(APIRoutes.LOGIN)
      .reply(200, mockUserInfo);

    return fetchLogin(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: mockUserInfo
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`The API call to /login had resulted in an error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchLogin = login({
      email: `mail@mail`,
      password: `pass`
    });

    apiMock
      .onPost(APIRoutes.LOGIN)
      .reply(400, {response: 400});

    return fetchLogin(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffers = fetchOffersList();

    apiMock
      .onGet(APIRoutes.OFFERS)
      .reply(200, mockOffers);

    return fetchOffers(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: mockOffers
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.DONE
        });
      });
  });
  it(`Should make a correct API call to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const fetchSingleOffer = fetchOffer(offerId);

    apiMock
      .onGet(`${APIRoutes.OFFERS}/${offerId}`)
      .reply(200, mockOffers[0]);

    return fetchSingleOffer(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: mockOffers[0]
        });
      });
  });
  it(`The API call to /hotels had resulted in an error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const fetchSingleOffer = fetchOffer(offerId);

    apiMock
      .onGet(`${APIRoutes.OFFERS}/${offerId}`)
      .reply(404, {response: {status: 404}});

    return fetchSingleOffer(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.ERROR
        });
      });
  });
  it(` Should make a correct API call to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const fetchNearby = fetchNearbyList(offerId);

    apiMock
      .onGet(`${APIRoutes.OFFERS}/${offerId}/${APIRoutes.NEARBY}`)
      .reply(200, mockOffers);

    return fetchNearby(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: mockOffers
        });
      });
  });
  it(` Should make a correct API get call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const fetchReviews = fetchOfferReviews(offerId);

    apiMock
      .onGet(`${APIRoutes.REVIEWS}/${offerId}`)
      .reply(200, mockReviews);

    return fetchReviews(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: mockReviews
        });
      });
  });
  it(`Should make a correct API post call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const sendReview = sendOfferReview(offerId, mockReview);

    apiMock
      .onPost(`${APIRoutes.REVIEWS}/${offerId}`)
      .reply(200, mockReviews);

    return sendReview(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: mockReviews
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FORM_FETCH_STATUS,
          payload: FetchStatus.DONE
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_FORM_FETCH_STATUS,
          payload: FetchStatus.PENDING
        });
      });
  });
  it(`The API call to /comments/:id had resulted in error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const sendReview = sendOfferReview(offerId, mockReview);

    apiMock
      .onPost(`${APIRoutes.REVIEWS}/${offerId}`)
      .reply(401, {response: {status: 401}});

    return sendReview(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FORM_FETCH_STATUS,
          payload: FetchStatus.ERROR
        });
      });
  });
  it(`Should make a correct API post call to /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const status = 1;
    const sendFavorite = sendFavoriteStatus(offerId, status);

    apiMock
      .onPost(`${APIRoutes.FAVORITE}/${offerId}/${status}`)
      .reply(200, mockOffers[0]);

    return sendFavorite(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: mockOffers[0]
        });
      });
  });
});
