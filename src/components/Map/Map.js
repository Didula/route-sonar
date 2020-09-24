import React, {useCallback, useEffect, useState} from "react";
import {connect} from 'react-redux';
import {DirectionsRenderer, DirectionsService, GoogleMap, Marker} from "@react-google-maps/api";
import mapStyles from './map-styles'
import * as actions from '../../store/actions/index'


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
const Map = (props) => {

    const [currentDirection, setCurrentDirection] = useState(null);

    useEffect(() => {
        props.onFetchingCurrentUserLocation();
    },[]);

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
    },[currentDirection]);

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

const mapStateToProps = (state) => {
    return {
        currentLocation: state.map.currentLocation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchingCurrentUserLocation: () => dispatch(actions.fetchStartPoint())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);
