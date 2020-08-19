import React, {useState, useCallback, useEffect} from "react";
import {DirectionsRenderer, DirectionsService} from "@react-google-maps/api";

export default function Direction(props) {
    // specify the start point
    // const origin = {}
    // const destination = {};
    // specify the end point
    const transitPoints = [];
    // specify the waypoints (in no particular order)

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
            {console.log(props.startPoint, props.endPoint)}
            <DirectionsService
                options={{
                    origin: props.startPoint,
                    destination: props.endPoint,
                    travelMode: "DRIVING",
                    optimizeWaypoints: false,
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




