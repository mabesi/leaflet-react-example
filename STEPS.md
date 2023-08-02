# Install react-router-dom
npm install react-router-dom

# Install Leaflet
npm install leaflet

# Install React Leaflet
npm install react-leaflet

# Import modules
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

# Or
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'

# Install Leaflet TS Types
npm install -D @types/leaflet

# Basic Map
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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