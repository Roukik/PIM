import React from 'react';
import Menu from '../components/Menu';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function CarteR() {
  return (
    <div>
      <Menu />
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CarteR;

