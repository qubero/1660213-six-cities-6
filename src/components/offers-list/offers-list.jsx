import React from 'react';
import {offersListWithTypePropTypes} from '../../prop-types.prop';
import OfferCard from '../offer-card/offer-card';

const OffersList = ({offers, offerCardType}) => {
  return (
    <>
      {offers.map((offer) =>
        <OfferCard
          key={offer.id}
          offer={offer}
          offerCardType={offerCardType}
        />
      )}
    </>
  );
};

OffersList.propTypes = offersListWithTypePropTypes;

export default OffersList;
