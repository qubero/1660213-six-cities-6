import {NameSpace} from '../root-reducer';

export const getFetchStatus = (state) => state[NameSpace.FETCH].fetchStatus;
