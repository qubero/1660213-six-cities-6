export const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORT: `sort/changeSort`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
  })
};
