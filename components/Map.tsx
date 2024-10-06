"use client";

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[-23.702687043219736, 29.230261581311343]}
      zoom={4}
      style={{ height: "500px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-23.702687043219736, 29.230261581311343]}>
        <Popup>Burst pipe leaking - #ISSUE7883a6</Popup>
      </Marker>
      <Marker position={[-23.812687043219736, 29.830261581311343]}>
        <Popup>Burst pipe leaking - #ISSUE7883a6</Popup>
      </Marker>
      <Marker position={[-23.202687043219736, 29.590261581311343]}>
        <Popup>Burst pipe leaking - #ISSUE7883a6</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
