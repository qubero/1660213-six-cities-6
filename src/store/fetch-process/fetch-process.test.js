import {fetchProcess} from './fetch-process';
import {changeFetchStatus, changeFormFetchStatus} from '../action';
import {FetchStatus} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(fetchProcess(undefined, {}))
      .toEqual({
        fetchStatus: FetchStatus.PENDING,
        formFetchStatus: FetchStatus.PENDING
      });
  });
  it(`Reducer should change fetch status`, () => {
    const state = {
      fetchStatus: `Pending`
    };
    expect(fetchProcess(state, changeFetchStatus(`Error`)))
      .toEqual({
        fetchStatus: `Error`,
      });
  });
  it(`Reducer should change form fetch status`, () => {
    const state = {
      formFetchStatus: `Pending`
    };
    expect(fetchProcess(state, changeFormFetchStatus(`Error`)))
      .toEqual({
        formFetchStatus: `Error`,
      });
  });
});
