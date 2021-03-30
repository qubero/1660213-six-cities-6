import React from 'react';
import OffersList from '../offers-list/offers-list';
import {offersListProxyPropTypes} from '../../prop-types.prop';

const OffersListProxy = ({className = ``, ...props}) => {
  return (
    <div className= {`places__list ${className}`} data-testid="places-list">
      <OffersList {...props} />
    </div>
  );
};

OffersListProxy.propTypes = offersListProxyPropTypes;

export default OffersListProxy;
