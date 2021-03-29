import {NameSpace} from '../root-reducer';

export const getOffer = (state) => state[NameSpace.OFFER].offer;
export const getIsOfferLoaded = (state) => state[NameSpace.OFFER].isOfferLoaded;
export const getNearby = (state) => state[NameSpace.OFFER].nearby;
export const getIsNearbyLoaded = (state) => state[NameSpace.OFFER].isNearbyLoaded;
export const getReviews = (state) => state[NameSpace.OFFER].reviews;
