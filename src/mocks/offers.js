export const cityLocations = {
  amsterdam: [52.38333, 4.9]
};

export const OfferTypes = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`
};

export const offerLocations = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

export const offerCards = [
  {
    id: 1,
    type: OfferTypes.APARTMENT,
    title: `Wood and stone place`,
    price: 30,
    rating: 3,
    isFavorite: true,
    isPremium: false,
    image: `img/apartment-01.jpg`,
    city: `Amsterdam`
  },
  {
    id: 2,
    type: OfferTypes.APARTMENT,
    title: `Wood and stone place`,
    price: 30,
    rating: 2,
    isFavorite: true,
    isPremium: false,
    image: `img/apartment-02.jpg`,
    city: `Amsterdam`
  },
  {
    id: 3,
    type: OfferTypes.APARTMENT,
    title: `Wood and stone place`,
    price: 30,
    rating: 3,
    isFavorite: false,
    isPremium: false,
    image: `img/apartment-03.jpg`,
    city: `Cologne`
  },
  {
    id: 4,
    type: OfferTypes.APARTMENT,
    title: `Wood and stone place`,
    price: 30,
    rating: 5,
    isFavorite: true,
    isPremium: true,
    image: `img/apartment-01.jpg`,
    city: `Cologne`
  }
];

export const offer = {
  id: 3,
  hostId: 123,
  type: OfferTypes.APARTMENT,
  title: `Wood and stone place`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  price: 30,
  rating: 3,
  isFavorite: false,
  isPremium: false,
  image: `img/apartment-03.jpg`,
  galleryList: [
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/apartment-04.jpg`,
    `img/apartment-05.jpg`,
    `img/apartment-06.jpg`,
    `img/apartment-07.jpg`,
    `img/apartment-08.jpg`,
    `img/apartment-09.jpg`,
    `img/apartment-10.jpg`
  ],
  bedrooms: 2,
  maxAdults: 10,
  services: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ]
};
