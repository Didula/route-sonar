import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from './Map/map-styles';

const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
}
const center = {
    lat: 6.927079,
    lng: 79.861244
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

export default function MapContainer() {

    const map_key = 'AIzaSyB1RE8whFkW6IGyJDICc-f-E88xq9tQL9s';

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: map_key
    });

    if (loadError)
        return "Error loading maps";
    if (!isLoaded)
        return "Loading maps";
                     
    return (
        <div style = {{width: '100%', height: '95vh'}}>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={12} 
                center={center}
                options={options}>
            </GoogleMap>
        </div>
    );
}
