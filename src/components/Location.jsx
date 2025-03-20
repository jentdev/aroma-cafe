import React from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { assets } from '../assets/assets';

const Location = () => {

  const marker = {
    geacode: [40.7579747,-73.9881175],
    popUp: 'Aroma Cafe'
  };

  const customIcon = new Icon({
    iconUrl: assets.pin,
    iconSize: [38, 38] // size of icon
  });

  return (
    <div className="location-container">
      <div className="map-container">
        <MapContainer center={[40.7579747,-73.9881175]} zoom={13}>
          <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          <Marker position={marker.geacode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>         
        </MapContainer>
      </div>
      <div>
        <p>405 Platte Ave</p>
        <p>Manhattan, NY 10019</p>
        <p>(987) - 654 - 3210</p>
      </div>
    </div>
  )
};

export default Location;