export const AppRoutes = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_ID: `/offer/:id`,
  ERROR: `/error`
};

export const FetchStatus = {
  PENDING: `PENDING`,
  SENDING: `SENDING`,
  DONE: `DONE`,
  ERROR: `ERROR`
};

export const APIRoutes = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFERS: `/hotels`,
  REVIEWS: `/comments`,
  FAVORITE: `/favorite`,
  NEARBY: `nearby`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW: `Price: low to high`,
  PRICE_HIGH: `Price: high to low`,
  RATING: `Top rated first`
};

export const CityNames = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const OfferCardType = {
  CITIES: `cities__place-card`,
  FAVORITES: `favorites__card`,
  ROOM: `near-places__card`
};

export const OfferImageMap = new Map([
  [
    OfferCardType.CITIES,
    {
      class: `cities__image-wrapper`,
      size: [260, 200]
    }
  ],
  [
    OfferCardType.FAVORITES,
    {
      class: `favorites__image-wrapper`,
      size: [150, 110]
    }
  ],
  [OfferCardType.ROOM,
    {
      class: `near-places__image-wrapper`,
      size: [260, 200]
    }
  ]
]);
