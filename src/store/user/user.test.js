import {user} from './user';
import {AuthorizationStatus} from '../../const';
import {requireAuthorization, setUserInfo} from '../action';
import {adaptUserInfoToClient} from '../../utils/utils';

/* eslint-disable */
const mockUserInfo = {
  avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg",
  email: "mail@gmail.com",
  id: 1,
  is_pro: false,
  name: "mail"
};
/* eslint-enable */

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: {}
      });
  });
  it(`Reducer should change authorization status`, () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    };
    expect(user(state, requireAuthorization(`AUTH`)))
      .toEqual({
        authorizationStatus: `AUTH`,
      });
  });
  it(`Reducer should change user info`, () => {
    const state = {
      userInfo: {}
    };
    expect(user(state, setUserInfo(mockUserInfo)))
      .toEqual({
        userInfo: adaptUserInfoToClient(mockUserInfo)
      });
  });
});
