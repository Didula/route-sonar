import React, {useCallback, useEffect, useState} from "react";
import {DirectionsRenderer, DirectionsService, GoogleMap, Marker} from "@react-google-maps/api";
import mapStyles from './map-styles'


const mapsContainerStyle = {
    width: '100vw',
    height: '100vh',
    float: 'right'
}
const mapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}
export default function Map(props) {

    const [currentDirection, setCurrentDirection] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    // Save the route information obtained by API call to DirectionsService here

/*    useEffect(() => {
        const geolocationOptions = {
            enableHighAccuracy: true,
            timeout: 1000 * 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
            maximumAge: 1000 * 3600 * 24 // 24 hour
        };
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = {lat: 0, lng: 0};
                    currentLocation.lat = position.coords.latitude;
                    currentLocation.lng = position.coords.longitude;
                    setCurrentLocation(currentLocation)
                },
                () => {
                    console.log("Geolocation fetching error")
                },
                geolocationOptions)
        }
    }, [])*/

    const directionsCallback = useCallback((googleResponse) => {
        if (googleResponse) {
            if (currentDirection) {
                if (googleResponse.status === "OK" &&
                    googleResponse.routes[0].overview_polyline !==
                    currentDirection.routes[0].overview_polyline) {
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
    },[]);

    let directionService = null

    if (props.markers.length > 2 && props.directionServiceOptions !== null) {
        directionService = <DirectionsService
            options={props.directionServiceOptions}
            callback={directionsCallback}
        />
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapsContainerStyle}
                zoom={12}
                center={props.currentLocation}
                options={mapOptions}
                onClick={(event) => {
                }}>
                {props.markers.map(marker => {
                    let markerArray = [];
                    if (marker.coordinates.lat !== '' && marker.coordinates.lng !== '') {
                        markerArray.push(<Marker key={marker.placeId} position={marker.coordinates}/>)
                    }
                    return markerArray;
                })}
                {directionService}
                {currentDirection !== null && (<DirectionsRenderer options={{directions: currentDirection}}/>)}
            </GoogleMap>
        </div>
    );
}