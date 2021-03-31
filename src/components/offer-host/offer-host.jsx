import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {userCardPropTypes} from '../../prop-types.prop';

const OfferHost = ({host, description}) => {
  const {
    name,
    avatar,
    isPro
  } = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div
          className={classNames(
              `property__avatar-wrapper user__avatar-wrapper`,
              {'property__avatar-wrapper--pro': isPro}
          )}
          data-testid="property-avatar"
        >
          <img
            className="property__avatar user__avatar"
            src={avatar}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">{name}</span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

OfferHost.propTypes = {
  host: PropTypes.shape(
      userCardPropTypes.isRequired,
  ),
  description: PropTypes.string.isRequired
};

export default OfferHost;
