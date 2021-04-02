import {NameSpace} from '../root-reducer';

export const getFetchStatus = (state) => state[NameSpace.FETCH].fetchStatus;
export const getFormFetchStatus = (state) => state[NameSpace.FETCH].formFetchStatus;
