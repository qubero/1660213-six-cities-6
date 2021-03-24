export const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORT: `sort/changeSort`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  SET_USER_INFO: `user/setUserInfo`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_OFFER: `offers/loadOffer`,
  LOAD_NEARBY: `offers/loadNearby`,
  LOAD_REVIEWS: `offers/loadReviews`,
  CLEAR_OFFER: `offers/clearOffer`,
  CHANGE_FAVORITE_STATUS: `offers/changeFavoriteStatus`,
  CHANGE_FETCH_STATUS: `fetch/changeStatus`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUserInfo: (info) => ({
    type: ActionType.SET_USER_INFO,
    payload: info
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer
  }),
  loadNearby: (offers) => ({
    type: ActionType.LOAD_NEARBY,
    payload: offers
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  changeFavoriteStatus: (offers) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: offers
  }),
  clearOffer: () => ({
    type: ActionType.CLEAR_OFFER
  }),
  changeFetchStatus: (status) => ({
    type: ActionType.CHANGE_FETCH_STATUS,
    payload: status
  })
};
