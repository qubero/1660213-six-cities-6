import React from 'react';
import PropTypes from 'prop-types';

const OfferServicesList = ({services}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {services.map((service) =>
          <li key={service} className="property__inside-item">
            {service}
          </li>
        )}
      </ul>
    </div>
  );
};

OfferServicesList.propTypes = {
  services: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

export default OfferServicesList;
