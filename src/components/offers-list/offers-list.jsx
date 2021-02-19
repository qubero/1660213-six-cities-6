import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerCardPropTypes} from '../../prop-types.prop';
import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';

const OffersList = ({offers}) => {
  const [, setHoverOfferId] = useState(null);

  const handleOfferHover = (offerId) => {
    setHoverOfferId(offerId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard key={offer.id} offer={offer} offerCardType={OfferCardType.CITIES} onOfferHover={handleOfferHover} />
      )}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          offerCardPropTypes,
      ),
  ).isRequired
};

export default OffersList;
