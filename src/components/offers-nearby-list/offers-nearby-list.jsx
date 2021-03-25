import React from 'react';
import OffersListProxy from '../offers-list-proxy/offers-list-proxy';
import {offersListPropTypes} from '../../prop-types.prop';
import {OfferCardType} from '../../const';

const OffersNearbyList = ({offers, setActiveOfferId}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OffersListProxy
        className={`near-places__list`}
        offers={offers}
        offerCardType={OfferCardType.ROOM}
        setActiveOfferId={setActiveOfferId}
      />
    </section>
  );
};

OffersNearbyList.propTypes = offersListPropTypes;

export default OffersNearbyList;
