import React from 'react';
import 'leaflet/dist/leaflet.css';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';

const BAAN = [-16.242615990481234, -48.968309435936305] as LatLngTuple;
const HOUSE = [-16.32249617862955, -48.92938431235188] as LatLngTuple;
const MAP_MARKER = new L.Icon({
  iconSize: [ 25, 32 ],
  iconAnchor: [ 13, 41 ],
  iconUrl: require('./marker.png')
  //shadowUrl: require('./marker.svg')
}) as L.Icon;

function MainMap() {
  return (
    <MapContainer className='full-height-map' center={HOUSE} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={BAAN} icon={MAP_MARKER} >
        <Popup>
          Base Aérea de Anápolis
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MainMap;
