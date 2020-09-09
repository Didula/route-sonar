import React, {useState} from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
import FBox from './FloatingBox/FloatingBox';
import Map from '../Map/Map'
import SideBar from '../../containers/SideBar/SideBar';

import './Home.module.css';

const Home = () => {
    //todo This component should be a container. will be moved in the future.
    const [selectedStartPoint, setSelectedStartPoint] = useState('');
    const [selectedStartPointAddress, setSelectedStartPointAddress] = useState(null);
    const [routePointInputs, setRoutePointInputs] = useState([{id: 1, value: ''}]);
    const [toggleBoxes, setToggleBoxes] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [mapInputMarkers, setMapInputMarkers] = useState([]);

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
        setMapInputMarkers(markers);
    }

    let inputComponent = null;
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
                markers={markers}/>
        </Auxi>
    );
}
export default Home;