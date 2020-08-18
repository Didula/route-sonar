import React from "react";
import {GoogleMap} from "@react-google-maps/api";
import mapStyles from './map-styles'


const mapsContainerStyle = {
    width: '100vw',
    height: '100vh'
}
const mapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}
const center = {lat: 6.7584063, lng: 79.890089}
export default function Map(props) {

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapsContainerStyle}
                zoom={14}
                center={center}
                options={mapOptions}
                onClick={(event) => {
                    console.log(event)
                }}/>
        </div>
    );
}