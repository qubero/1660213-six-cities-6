import React from 'react';
import OffersListProxy from '../offers-list-proxy/offers-list-proxy';
import {offersListPropTypes} from '../../prop-types.prop';
import {OfferCardType} from '../../const';

const OffersNearbyList = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OffersListProxy offers={offers} offerCardType={OfferCardType.ROOM} className={`near-places__list`} />
    </section>
  );
};

OffersNearbyList.propTypes = offersListPropTypes;

export default OffersNearbyList;
