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

    useEffect(() => {
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
    }, [])

    const directionsCallback = useCallback((googleResponse) => {
        if (googleResponse) {
            console.log('Google response', googleResponse);
            console.log(currentDirection);
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
    });

    let directionService = null

    let wayPoints = [...props.markers];
    let wayPointCoordinates = [];

    if (wayPoints.length > 2) {
        wayPoints.splice(0, 1);
        wayPoints.pop();
    }

    wayPoints.filter(point => point.coordinates.lat !== '' && point.coordinates.lng !== '').map(point => (wayPointCoordinates.push(
        {
            location: point.coordinates,
            stopover: true
        }))
    )
    console.log('coordinates', wayPointCoordinates);

    if (props.markers.length > 2) {
        directionService = <DirectionsService
            options={{
                origin: props.markers[0].coordinates,
                destination: props.markers[props.markers.length - 1].coordinates,
                travelMode: "DRIVING",
                optimizeWaypoints: true,
                waypoints: wayPointCoordinates
            }}
            callback={directionsCallback}
        />
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapsContainerStyle}
                zoom={12}
                center={currentLocation}
                options={mapOptions}
                onClick={(event) => {
                    console.log(event)
                }}>
                {props.markers.map(marker => {
                    let markerArray = [];
                    if (marker.coordinates.lat !== '' && marker.coordinates.lng !== '') {
                        console.log('In map building markers',marker);
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