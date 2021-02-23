import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';

const OffersListProxy = ({className = ``, ...props}) => {
  return (
    <div className= {`places__list ${className}`}>
      <OffersList {...props} />
    </div>
  );
};

OffersListProxy.propTypes = {
  className: PropTypes.string.isRequired
};

export default OffersListProxy;
