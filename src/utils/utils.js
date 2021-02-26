import dayjs from 'dayjs';

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
