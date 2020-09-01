import React, {useState} from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
// import StartBox from "../StartBox/StartBox";
import FBox from './FloatingBox/FloatingBox';
import Map from '../Map/Map'
import SideBar from '../../containers/SideBar/SideBar';

import './Home.module.css';

const Home = () => {
    //todo This component should be a container. will be moved in the future.
    const [selectedStartPoint, setSelectedStartPoint] = useState({lat: 6.936175599999999, lng: 79.8440651});
    const [selectedStartPointAddress, setSelectedStartPointAddress] = useState(null);
    const [selectedEndPoint, setSelectedEndPoint] = useState({lat: 6.8569811, lng: 79.87440250000002});
    const [toggleBoxes, setToggleBoxes] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [wayPoints, setWayPoints] = useState([]);

    const selectStartPointHandler = startPoint => {
        console.log("Home received start ", startPoint)
        setSelectedStartPoint(startPoint.coordinates);
        setSelectedStartPointAddress(startPoint.address);
    }

    let inputComponent = null;
    const addLocationClickHandler = () => {
        if (selectedStartPoint) {
            setToggleBoxes(!toggleBoxes);
        }
    }

    const addAnotherRoutePointHandler = (point) => {
        setWayPoints(preWayPoints => [...preWayPoints, ...point]);
    }

    if (!toggleBoxes) {
        inputComponent = <FBox
            onStartPointSelect={selectStartPointHandler}
            onAddLocationClick={addLocationClickHandler}/>
    } else {
        inputComponent = <SideBar
            onAddRoutePoint={addAnotherRoutePointHandler}
            selectedStartPoint={selectedStartPointAddress}
            onStartPointSelect={selectStartPointHandler}/>
    }

    return (
        <Auxi>
            <Header/>
            {inputComponent}
            {/*<Map startPoint={selectedStartPoint} endpoint={{lat: 6.8569811, lng: 79.87440250000002}}/>*/}
            <Map
                markers={markers}
                wayPoints={wayPoints}
                startPoint={selectedStartPoint}
                endpoint={selectedEndPoint}/>
        </Auxi>
    );
}
export default Home;