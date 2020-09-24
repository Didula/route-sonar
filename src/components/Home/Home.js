import React, {useEffect, useState} from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
import FBox from './FloatingBox/FloatingBox';
import Map from '../Map/Map'
import SideBar from '../../containers/SideBar/SideBar';
import './Home.module.css';
import {useLoadScript} from "@react-google-maps/api";

const LIBRARIES = ["places"];

const Home = () => {

    //todo This component should be a container. will be moved in the future.
    const [selectedStartPoint, setSelectedStartPoint] = useState('');
    const [selectedStartPointAddress, setSelectedStartPointAddress] = useState(null);
    const [toggleBoxes, setToggleBoxes] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [directionServiceOptions, setDirectionServiceOptions] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyB_OjxFPgR42bOlSCfJp_S6rEJTqoJMsfI',
        libraries: LIBRARIES
    });
    if (loadError) return "Error Loading error";
    if (!isLoaded) return "Loading Maps";

    const selectStartPointHandler = startPoint => {
        setSelectedStartPoint(startPoint.coordinates);
        setSelectedStartPointAddress(startPoint.address);
        // Adding start point as the first element of markers.
        setMarkers(prevMarkers => {
            if (prevMarkers.length === 0) {
                return [...prevMarkers, startPoint]
            } else {
                // updating first element.
                let markers = [...prevMarkers];
                markers[0] = startPoint;
                return markers;
            }
        });
        setCurrentLocation(startPoint.coordinates);
    }

    const addLocationClickHandler = () => {
        if (selectedStartPoint) {
            setToggleBoxes(!toggleBoxes);
        }
    }

    const addAnotherRoutePointHandler = (point) => {
        // Adding an empty marker.
        setMarkers(prevMarkers =>
            [...prevMarkers,
                {
                    placeId: '',
                    coordinates: {lat: '', lng: ''},
                    address: ''
                }
            ]);
        /*setRoutePointInputs(prevRoutePointInputs =>
            [...prevRoutePointInputs, {id: prevRoutePointInputs.length + 1, value:''}]);*/
    }

    const optimizeRouteClickHandler = () => {

        let wayPoints = [...markers];
        let wayPointCoordinates = [];
        let destination;

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
        if (markers.length < 2) {
            // Only start point is enabled.
            destination = null;
        } else /*if (markers.length === 2) */{
            // Only start point and end point input fields are enabled.
            // Check destination input field is filled.
            let markersClone = [...markers];
            console.log(markersClone);
            let lastFilledField = markersClone.reverse().find(point => (point.coordinates.lat !== '' && point.coordinates.lng !== ''))
            destination = lastFilledField.coordinates;
        }

        if (markers.length >= 2) {
            // Always replace the old value.
            setDirectionServiceOptions({
                origin: markers[0].coordinates,
                destination: destination,
                travelMode: "DRIVING",
                optimizeWaypoints: true,
                waypoints: wayPointCoordinates
            });
        }
    }

    let inputComponent;
    if (!toggleBoxes) {
        inputComponent = <FBox
            onStartPointSelect={selectStartPointHandler}
            onAddLocationClick={addLocationClickHandler}/>
    } else {
        inputComponent = <SideBar
            selectedStartPoint={selectedStartPointAddress}
            onStartPointSelect={selectStartPointHandler}
            onAddRoutePoint={addAnotherRoutePointHandler}
            onOptimizeRoutes={optimizeRouteClickHandler}
            onSelectLocation={setMarkers}
            markers={markers}
            setCurrentLocation={setCurrentLocation}/>
    }

    return (
        <Auxi>
            { !toggleBoxes ? <Header/>: null }
            {inputComponent}
            <Map
                markers={markers}
                directionServiceOptions={directionServiceOptions}/>
        </Auxi>
    );
}
export default Home;
