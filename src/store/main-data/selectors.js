import {NameSpace} from '../root-reducer';

export const getActiveSort = (state) => state[NameSpace.MAIN].activeSort;
export const getActiveCity = (state) => state[NameSpace.MAIN].activeCity;
