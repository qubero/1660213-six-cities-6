import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {mapPropTypes} from '../../prop-types.prop';

import "leaflet/dist/leaflet.css";

const Map = ({city, offers, activeOfferId, isMainScreen = false}) => {
  const mapRef = useRef();

  const basicIcon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  });

  const activeIcon = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [27, 39]
  });

  const {location} = city;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: location.latitude,
        lng: location.longitude
      },
      zoom: location.zoom,
      zoomControl: true,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  useEffect(() => {
    const markers = [];

    offers.forEach((offer) => {
      const icon = offer.id === activeOfferId ? activeIcon : basicIcon;

      markers.push(
          leaflet
            .marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude
            }, {icon})
            .addTo(mapRef.current)
      );

      const activeIconElement = document.querySelector(`img[src="img/pin-active.svg"]`);

      if (activeIconElement) {
        activeIconElement.style.zIndex = 1010;
      }
    });

    return () => {
      markers.forEach((marker) => mapRef.current.removeLayer(marker));
    };
  }, [offers, activeOfferId]);

  return (
    <section
      className={`map ${isMainScreen ? `cities__map` : `property__map`}`}
      style={
        isMainScreen
          ? {height: `auto`}
          : {height: `579px`}
      }
      id="map"
    />
  );
};

Map.propTypes = mapPropTypes;

export default Map;
