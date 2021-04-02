import {createReducer} from '@reduxjs/toolkit';
import {changeFetchStatus, changeFormFetchStatus} from '../action';
import {FetchStatus} from '../../const';

const initialState = {
  fetchStatus: FetchStatus.PENDING,
  formFetchStatus: FetchStatus.PENDING
};

const fetchProcess = createReducer(initialState, (builder) => {
  builder.addCase(changeFetchStatus, (state, action) => {
    state.fetchStatus = action.payload;
  });
  builder.addCase(changeFormFetchStatus, (state, action) => {
    state.formFetchStatus = action.payload;
  });
});

export {fetchProcess};
