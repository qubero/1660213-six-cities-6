import {
  setUserInfo,
  requireAuthorization,
  loadFavoriteOffers,
  loadOffers,
  loadOffer,
  loadNearby,
  loadReviews,
  changeFetchStatus,
  updateOffers,
  changeFormFetchStatus
} from './action';
import {
  AuthorizationStatus,
  APIRoutes,
  AppRoutes,
  FetchStatus
} from '../const';
import browserHistory from '../browser-history';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(({data}) => dispatch(setUserInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => dispatch(setUserInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => browserHistory.push(AppRoutes.ROOT))
    .catch(() => {})
);

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)))
);

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)))
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}/${APIRoutes.NEARBY}`)
    .then(({data}) => dispatch(loadNearby(data)))
);

export const fetchOfferReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch(() => {})
);

export const sendOfferReview = (id, {review: comment, rating}) => (dispatch, _state, api) => (
  api.post(`${APIRoutes.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadReviews(data)))
    .then(() => {
      dispatch(changeFormFetchStatus(FetchStatus.DONE));
      dispatch(changeFormFetchStatus(FetchStatus.PENDING));
    })
    .catch(() => {
      dispatch(changeFormFetchStatus(FetchStatus.ERROR));
      dispatch(changeFormFetchStatus(FetchStatus.DONE));
      dispatch(changeFormFetchStatus(FetchStatus.PENDING));
    })
);

export const sendFavoriteStatus = (id, status) => (dispatch, _state, api) => (
  api.post(`${APIRoutes.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(updateOffers(data)))
    .catch(() => {})
);
