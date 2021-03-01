import React from 'react';
import {offersListWithTypePropTypes} from '../../prop-types.prop';
import OfferCard from '../offer-card/offer-card';

const OffersList = ({offers, offerCardType, setActiveOfferId}) => {
  const handleOfferHover = (offerId) => {
    setActiveOfferId(offerId);
  };

  const handleOfferBlur = () => {
    setActiveOfferId(null);
  };

  return (
    <>
      {offers.map((offer) =>
        <OfferCard
          key={offer.id}
          offer={offer}
          offerCardType={offerCardType}
          onOfferBlur={handleOfferBlur}
          onOfferHover={handleOfferHover}
        />
      )}
    </>
  );
};

OffersList.propTypes = offersListWithTypePropTypes;

export default OffersList;
