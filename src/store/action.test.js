import {
  ActionType,
  changeCity,
  changeSort,
  loadFavoriteOffers,
  loadOffers,
  loadNearby,
  loadOffer,
  loadReviews,
  requireAuthorization,
  setUserInfo,
  setActiveOffer,
  changeFetchStatus,
  clearOffer,
  updateOffers,
  changeFormFetchStatus
} from './action';

/* eslint-disable */
const mockOffers = [{"city":{"name":"Paris","location":{"latitude":48.85661,"longitude":2.351499,"zoom":13}},"preview_image":"https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","images":["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg","https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg"],"title":"The house among olive ","is_favorite":false,"is_premium":false,"rating":4.4,"type":"room","bedrooms":1,"max_adults":1,"price":159,"goods":["Laptop friendly workspace"],"host":{"id":25,"name":"Angelina","is_pro":true,"avatar_url":"img/avatar-angelina.jpg"},"description":"Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.","location":{"latitude":48.861610000000006,"longitude":2.340499,"zoom":16},"id":12}];

const mockReviews = [{
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
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

describe(`Action creators work correctly`, () => {
  it(`Action creator for city change returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    };
    expect(changeCity(`Paris`)).toEqual(expectedAction);
  });
  it(`Action creator for sort change returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT,
      payload: `Popular`
    };
    expect(changeSort(`Popular`)).toEqual(expectedAction);
  });
  it(`Action creator for requiring authorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `AUTH`
    };
    expect(requireAuthorization(`AUTH`)).toEqual(expectedAction);
  });
  it(`Action creator for setting user info returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_USER_INFO,
      payload: mockUserInfo
    };
    expect(setUserInfo(mockUserInfo)).toEqual(expectedAction);
  });
  it(`Action creator for favorite offers load returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: mockOffers
    };
    expect(loadFavoriteOffers(mockOffers)).toEqual(expectedAction);
  });
  it(`Action creator for offers load returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers
    };
    expect(loadOffers(mockOffers)).toEqual(expectedAction);
  });
  it(`Action creator for nearby load returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: mockOffers
    };
    expect(loadNearby(mockOffers)).toEqual(expectedAction);
  });
  it(`Action creator for single offer load returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: mockOffers[0]
    };
    expect(loadOffer(mockOffers[0])).toEqual(expectedAction);
  });
  it(`Action creator for reviews load returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: mockReviews
    };
    expect(loadReviews(mockReviews)).toEqual(expectedAction);
  });
  it(`Action creator for setting active offer returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: 1
    };
    expect(setActiveOffer(1)).toEqual(expectedAction);
  });
  it(`Action creator for changing fetch status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: `Pending`
    };
    expect(changeFetchStatus(`Pending`)).toEqual(expectedAction);
  });
  it(`Action creator for changing form fetch status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_FORM_FETCH_STATUS,
      payload: `Pending`
    };
    expect(changeFormFetchStatus(`Pending`)).toEqual(expectedAction);
  });
  it(`Action creator for offer clear returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_OFFER
    };
    expect(clearOffer()).toEqual(expectedAction);
  });
  it(`Action creator for offers update returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: mockOffers[0]
    };
    expect(updateOffers(mockOffers[0])).toEqual(expectedAction);
  });
});
