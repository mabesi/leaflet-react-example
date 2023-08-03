# Install react-router-dom
npm install react-router-dom

# Install Leaflet
npm install leaflet

# Install React Leaflet
npm install react-leaflet

# Install Leaflet TS Types
npm install -D @types/leaflet

# Create and import map.css and leaflet.css
.full-height-map {
    height: 100vh;
}

import 'leaflet/dist/leaflet.css';
import './map.css';

# Import modules
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

# Or
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'

# Basic Map
<MapContainer className='full-height-map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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