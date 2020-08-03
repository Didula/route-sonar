import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 19.075983, lng: 72.877655}} />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapContainer() {

    const map_key = 'AIzaSyB1RE8whFkW6IGyJDICc-f-E88xq9tQL9s';

    return (
        <div style = {{width: '100%', height: '95vh'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${map_key}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
