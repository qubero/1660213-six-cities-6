import PropTypes from 'prop-types';

export const userCardPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired
};

export const reviewCardPropTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape(userCardPropTypes)
};

const cityPropTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  name: PropTypes.string.isRequired
};

export const offerCardPropTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  galleryList: PropTypes.arrayOf(
      PropTypes.string.isRequired,
  ).isRequired,
  services: PropTypes.arrayOf(
      PropTypes.string.isRequired,
  ).isRequired,
  city: PropTypes.shape(cityPropTypes),
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  host: PropTypes.shape(userCardPropTypes)
};

export const offersListPropTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerCardPropTypes).isRequired
  ).isRequired,
  setActiveOfferId: PropTypes.func
};

export const offersListWithCityPropTypes = Object.assign(
    {},
    offersListPropTypes,
    {activeCity: PropTypes.string.isRequired}
);

export const offersListWithTypePropTypes = Object.assign(
    {},
    offersListPropTypes,
    {offerCardType: PropTypes.string.isRequired}
);

export const offersListProxyPropTypes = Object.assign(
    {},
    offersListWithTypePropTypes,
    {className: PropTypes.string.isRequired}
);

export const mapPropTypes = Object.assign(
    {},
    offersListPropTypes,
    {city: PropTypes.shape(cityPropTypes).isRequired},
    {activeOfferId: PropTypes.number},
    {isMainScreen: PropTypes.bool}
);
