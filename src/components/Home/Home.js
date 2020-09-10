import React, {useState} from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
import FBox from './FloatingBox/FloatingBox';
import Map from '../Map/Map'
import SideBar from '../../containers/SideBar/SideBar';

import './Home.module.css';
import {DirectionsService} from "@react-google-maps/api";

const Home = () => {
    //todo This component should be a container. will be moved in the future.
    const [selectedStartPoint, setSelectedStartPoint] = useState('');
    const [selectedStartPointAddress, setSelectedStartPointAddress] = useState(null);
    const [routePointInputs, setRoutePointInputs] = useState([{id: 1, value: ''}]);
    const [toggleBoxes, setToggleBoxes] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [directionServiceOptions, setDirectionServiceOptions] = useState(null);

    const selectStartPointHandler = startPoint => {
        console.log("Home received start ", startPoint)
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
    }

    console.log(markers);

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
        if(markers.length < 2){
            // Only start point is enabled.
            destination = null;
        } else if (markers.length === 2) {
            // Only start point and end point input fields are enabled.
            // Check destination input field is filled.
            if (markers[markers.length - 1].coordinates.lat && markers[markers.length - 1].coordinates.lng) {
                destination = markers[markers.length - 1].coordinates;
            }
        } else {
            // One or more way points inputs are enabled.
            if (markers[markers.length - 1].coordinates.lat && markers[markers.length - 1].coordinates.lng) {
                destination = markers[markers.length - 1].coordinates;
            }
        }

        console.log('coordinates', wayPointCoordinates);

        if (markers.length > 2) {
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
            markers={markers}/>
    }

    return (
        <Auxi>
            <Header/>
            {inputComponent}
            <Map
                markers={markers}
                directionServiceOptions={directionServiceOptions}/>
        </Auxi>
    );
}
export default Home;