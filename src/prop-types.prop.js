import PropTypes from 'prop-types';

export const offerCardPropTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};
