import React, {useCallback, useEffect, useState} from "react";
import {connect} from 'react-redux';
import {DirectionsRenderer, DirectionsService, GoogleMap, InfoWindow, Marker} from "@react-google-maps/api";
import mapStyles from './map-styles'
import * as actions from '../../store/actions/index'

const mapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}
const Map = (props) => {

    const [selectedMarker, setSelectedMarker] = useState({});
    const [currentDirection, setCurrentDirection] = useState(null);
    const [mapsContainerStyle, setMapsContainerStyle] = useState({
        width: '100vw',
        height: '100vh',
        float: 'right'
    });

    useEffect(() => {
        props.onFetchingCurrentUserLocation();
    }, []);

    useEffect(() => {
        if(props.isSidePanelOpen){
            const updatedMapContainerStyle = {
                width: (100 - props.sidePanelWidthPercentage) +'vw',
                height: '100vh',
                float: 'right'
            }
            setMapsContainerStyle(updatedMapContainerStyle);
        } else {
            setMapsContainerStyle(
                {
                    width: '100vw',
                    height: '100vh',
                    float: 'right'
                }
            );
        }
    },[props.isSidePanelOpen])

    const onSelect = marker => {
        setSelectedMarker(marker)
    }

    const directionsCallback = useCallback((googleResponse) => {
        if (googleResponse) {
            console.log(googleResponse)
            props.onSuccessFullOptimization(true);
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
    }, [currentDirection]);

    let directionService = null

    if (props.markers.length > 2 && props.directionServiceOptions !== null) {
        directionService = <DirectionsService
            options={props.directionServiceOptions}
            callback={directionsCallback}
        />
    }

    let markerElements = null;
    markerElements = props.markers.map(marker => {
        let markerArray = [];
        if (marker.coordinates.lat !== '' && marker.coordinates.lng !== '') {
            markerArray.push(
                <Marker
                    key={marker.placeId}
                    position={marker.coordinates}
                    onClick={() => onSelect(marker)}
                ><InfoWindow clickable={false}>
                    <div>{marker.reference}</div>
                </InfoWindow>
                </Marker>)
        }
        return markerArray;
    })

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapsContainerStyle}
                zoom={12}
                center={props.currentLocation}
                options={mapOptions}
                onClick={(event) => {
                }}>
                {!props.isOptimized && markerElements}
                {directionService}
                {currentDirection !== null && (<DirectionsRenderer options={{directions: currentDirection}}/>)}
            </GoogleMap>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentLocation: state.map.currentLocation,
        startLocation: state.map.startLocation,
        markers: state.map.markers,
        directionServiceOptions: state.map.directionServiceOptions,
        isOptimized: state.map.isOptimized,
        sidePanelWidthPercentage: state.sideContent.sidePanelWidthPercentage,
        isSidePanelOpen: state.home.isSidePanelOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchingCurrentUserLocation: () => dispatch(actions.fetchStartPoint()),
        onSuccessFullOptimization: (value) => dispatch(actions.setIsOptimized(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
