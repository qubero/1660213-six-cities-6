import {combineReducers} from 'redux';
import {mainData} from './main-data/main-data';
import {user} from './user/user';
import {fetchProcess} from './fetch-process/fetch-process';
import {offerData} from './offer-data/offer-data';
import {offersData} from './offers-data/offers-data';

export const NameSpace = {
  MAIN: `MAIN`,
  USER: `USER`,
  FETCH: `FETCH`,
  OFFER: `OFFER`,
  OFFERS: `OFFERS`
};

export default combineReducers({
  [NameSpace.MAIN]: mainData,
  [NameSpace.USER]: user,
  [NameSpace.FETCH]: fetchProcess,
  [NameSpace.OFFER]: offerData,
  [NameSpace.OFFERS]: offersData,
});
