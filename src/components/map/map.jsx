import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import "leaflet/dist/leaflet.css";

const Map = ({city, offers, isMainScreen = false}) => {
  const mapRef = useRef();
  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  });

  useEffect(() => {
    const zoom = 12;
    const map = leaflet.map(mapRef.current, {
      center: city,
      zoom,
      zoomControl: true,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer, {icon})
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [city, offers]);


  return (
    <section
      className="cities__map map"
      style={
        isMainScreen
          ? {height: `auto`}
          : {height: `579px`}
      }
      ref={mapRef}
    />
  );
};

Map.propTypes = {
  city: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  isMainScreen: PropTypes.bool
};

export default Map;
