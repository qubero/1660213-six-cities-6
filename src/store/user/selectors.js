import {NameSpace} from '../root-reducer';

export const getUserInfo = (state) => state[NameSpace.USER].userInfo;
export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
