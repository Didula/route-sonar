import React, {useCallback, useEffect, useState} from "react";
import {DirectionsRenderer, DirectionsService, GoogleMap} from "@react-google-maps/api";
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

    // specify the start point
    // const origin = {}
    // const destination = {};
    // specify the end point
    const transitPoints = [];
    // specify the waypoints (in no particular order)

    const [currentDirection, setCurrentDirection] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    // Save the route information obtained by API call to DirectionsService here

    useEffect(() => {
        const geolocationOptions = {
            enableHighAccuracy: true,
            timeout: 1000 * 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
            maximumAge: 1000 * 3600 * 24 // 24 hour
        };
        if(navigator && navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    const currentLocation = {lat: 0, lng: 0};
                    currentLocation.lat = position.coords.latitude;
                    currentLocation.lng = position.coords.longitude;
                    setCurrentLocation(currentLocation)
                },
                ()=>{console.log("Geolocation fetching error")},
                geolocationOptions)
        }
    },[])

    const directionsCallback = useCallback((googleResponse) => {
        if (googleResponse) {
            if (currentDirection) {
                if (
                    googleResponse.status === "OK" &&
                    googleResponse.geocoded_waypoints.length !==
                    currentDirection.geocoded_waypoints.length) {
                    console.log("since the route is changed to update the state");
                    setCurrentDirection(googleResponse);
                } else {
                    console.log("same as last time do not update state for route");
                }
            } else {
                if (googleResponse.status === "OK") {
                    console.log("first time for a route is set, updates the state");
                    setCurrentDirection(googleResponse);
                } else {
                    console.log("not update the state for the same route as the previous");
                }
            }
        }
    });

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapsContainerStyle}
                zoom={15}
                center={currentLocation}
                options={mapOptions}
                onClick={(event) => {
                    console.log(event)
                }}>
                {/*<Marker position={props.center}/>*/}
                <DirectionsService
                    options={{
                        origin: props.center,
                        destination: props.endpoint,
                        travelMode: "DRIVING",
                        optimizeWaypoints: false,
                        waypoints: transitPoints
                    }}
                    callback={directionsCallback}
                />
                {currentDirection !== null && (<DirectionsRenderer options={{directions: currentDirection}}/>)}
            </GoogleMap>
        </div>
    );
}