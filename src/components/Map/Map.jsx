// src/Map.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your actual Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoidGFsaGF3YXFxYXMxNCIsImEiOiJjbHBreHhscWEwMWU4MnFyenU3ODdmeTdsIn0.8IlEgMNGcbx806t363hDJg';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return (
    <div id="map" className="absolute top-0 left-0 w-full h-full z-0" />
  );
};

export default Map;
