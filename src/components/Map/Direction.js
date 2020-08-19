import React, {useState, useCallback} from "react";
import {DirectionsRenderer, DirectionsService} from "@react-google-maps/api";

export default function Direction(props) {
    // specify the start point
    const origin = {lat: props.startPoint.lat, lng: props.startPoint.lng}
    const destination = {lat: 6.841165, lng: 79.965431};
    // specify the end point
    const transitPoints = [
        {
            location: {lat: 6.931970, lng: 79.857750},
            stopover: true
        },
        {location: {lat: 6.847278, lng: 79.926605}},
        {location: {lat: 6.839670, lng: 79.875969}},
    ];
    // specify the waypoints (in no particular order)

    // const [origin, setOrigin] = useState({lat: props.startPoint.lat, lng: props.startPoint.lng});
    const [currentDirection, setCurrentDirection] = useState(null);
    // Save the route information obtained by API call to DirectionsService here

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
                console.log(googleResponse);
                if (googleResponse.status === "OK") {
                    console.log("first time for a route is set, updates the state");
                    setCurrentDirection(googleResponse);
                } else {
                    console.log("not update the state for the same route as the previous");
                }
            }
        }
    },[origin]);

    const setOriginHandler = (newOrigin) => {
    }

    return (
        <div>
            <DirectionsService
                options={{
                    origin,
                    destination,
                    travelMode: "DRIVING",
                    optimizeWaypoints: true,
                    waypoints: transitPoints
                }}
                callback={directionsCallback}
            />
            {currentDirection !== null && (<DirectionsRenderer options={{directions: currentDirection}}/>)}
        </div>
    );
}
// (1) DirectionsService component searches the route when rendered and returns the result as callback.
// (2) When this API response is saved in state like this time, due to the state change, the DirecitonsService component is rendered again.
// (3) Make API call again when the DirectionsService component is rendered.
// In order to prevent the infinite loop of (1) to (3) above, the process of not updating state unless the result of (3) is the same as state was implemented above




