import React from 'react';
import Menu from '../components/Menu';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Carte() {
  return (
    <div style={{ flex: 1 }}>
      <MapContainer center={[43.6047, 1.4442]} zoom={13} style={{ height: "calc(100vh - 60px)" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[43.604663, 1.464671]}>
          <Popup>
            6 impasse Marie Laurencin, 31200 Toulouse
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Carte;


