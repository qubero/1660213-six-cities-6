import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setUserInfo} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUserInfo, (state, action) => {
    state.userInfo = action.payload;
  });
});

export {user};
