import React from 'react';
import 'leaflet/dist/leaflet.css';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


function MainMap() {
  return (
    <MapContainer className='full-height-map' center={[-16.32249617862955, -48.92938431235188]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MainMap;
