import React from 'react';
import PropTypes from 'prop-types';

const OfferGalleryList = ({images: allImages}) => {
  const images = allImages.slice(0, 6);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) =>
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Photo studio" />
          </div>
        )}
      </div>
    </div>
  );
};

OfferGalleryList.propTypes = {
  images: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired
};

export default OfferGalleryList;
