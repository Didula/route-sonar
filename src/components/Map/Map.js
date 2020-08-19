import React from "react";
import { GoogleMap} from "@react-google-maps/api";
import Direction from "./Direction";
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
export default function Map(props) {

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapsContainerStyle}
                zoom={15}
                center={props.center}
                options={mapOptions}
                onClick={(event) => {
                    console.log(event)
                }}>
                {/*<Marker position={props.center}/>*/}
                <Direction startPoint={props.center}/>
            </GoogleMap>
        </div>
    );
}