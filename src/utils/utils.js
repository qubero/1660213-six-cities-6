import dayjs from 'dayjs';
import {SortType} from '../const';

export const humanizeDate = (date, format) => {
  return dayjs(date).format(format);
};

// TODO: key as prop (groupByKey 2nd arg)
export const groupByKey = (items) => items.reduce(
    (acc, item) => {
      const curKey = item.city.name;
      (acc[curKey] || (acc[curKey] = [])).push(item);
      return acc;
    }, {}
);

export const getRatingPercentage = (rating) => {
  return `${Math.round(rating) * 20}%`;
};

export const getFirstLetterUppercase = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return [...offers].sort((a, b) => (a.price - b.price));
    case SortType.PRICE_HIGH:
      return [...offers].sort((a, b) => (b.price - a.price));
    case SortType.RATING:
      return [...offers].sort((a, b) => (b.rating - a.rating));
    default:
      return [...offers];
  }
};

export const adaptOfferToClient = (offer) => (
  {
    id: offer.id,
    type: offer.type,
    title: offer.title,
    description: offer.description,
    price: offer.price,
    rating: offer.rating,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    image: offer.preview_image,
    galleryList: offer.images,
    bedrooms: offer.bedrooms,
    maxAdults: offer.max_adults,
    services: offer.goods,
    city: {
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom
      },
      name: offer.city.name
    },
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom
    },
    host: {
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
      avatar: offer.host.avatar_url
    }
  }
);

export const adaptOffersToClient = (offers) => (
  offers.map((offer) => adaptOfferToClient(offer))
);

export const adaptReviewToClient = (review) => (
  {
    id: review.id,
    comment: review.comment,
    date: review.date,
    rating: review.rating,
    user: {
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name,
      avatar: review.user.avatar_url
    }
  }
);

export const adaptReviewsToClient = (reviews) => (
  reviews.map((review) => adaptReviewToClient(review))
);
