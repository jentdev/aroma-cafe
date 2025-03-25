import React from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { assets } from '../assets/assets';

const Location = () => {

  const marker = {
    geacode: [40.7825547,-73.968153],
    popUp: 'Aroma Cafe'
  };

  const customIcon = new Icon({
    iconUrl: assets.pin,
    iconSize: [38, 38] // size of icon
  });

  return (
    <div className="location">
      <div className="contact">
        <p className="address">
          <span>405 Platte Ave</span>
          <span>Manhattan, NY 10019</span>
        </p>
        <p className="phone">(987) - 654 - 3210</p>
      </div>
      <div className="map">
        <MapContainer center={[40.7825547,-73.968153]} zoom={13}>
          <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          <Marker position={marker.geacode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>         
        </MapContainer>
      </div>
      
    </div>
  )
};

export default Location;