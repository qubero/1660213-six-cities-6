import {createReducer} from '@reduxjs/toolkit';
import {changeFetchStatus} from '../action';
import {FetchStatus} from '../../const';

const initialState = {
  fetchStatus: FetchStatus.PENDING
};

const fetchProcess = createReducer(initialState, (builder) => {
  builder.addCase(changeFetchStatus, (state, action) => {
    state.fetchStatus = action.payload;
  });
});

export {fetchProcess};
