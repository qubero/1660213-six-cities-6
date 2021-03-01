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
