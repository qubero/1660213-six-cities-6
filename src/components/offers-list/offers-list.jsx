import React, {useState} from 'react';
import {offersListWithTypePropTypes} from '../../prop-types.prop';
import OfferCard from '../offer-card/offer-card';

const OffersList = ({offers, offerCardType}) => {
  const [, setHoverOfferId] = useState(null);

  const handleOfferHover = (offerId) => {
    setHoverOfferId(offerId);
  };

  return (
    <>
      {offers.map((offer) =>
        <OfferCard key={offer.id} offer={offer} offerCardType={offerCardType} onOfferHover={handleOfferHover} />
      )}
    </>
  );
};

OffersList.propTypes = offersListWithTypePropTypes;

export default OffersList;
