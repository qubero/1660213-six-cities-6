export const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORT: `sort/changeSort`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  SET_USER_INFO: `user/setUserInfo`,
  LOAD_OFFERS: `offers/loadOffers`
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
  })
};
