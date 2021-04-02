import {NameSpace} from '../root-reducer';
import {AuthorizationStatus} from '../../const';

export const getUserInfo = (state) => state[NameSpace.USER].userInfo;
export const getIsAuth = (state) => (
  state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH
);
