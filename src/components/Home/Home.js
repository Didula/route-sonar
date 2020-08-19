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
    const [selectedStartPoint, setSelectedStartPoint] = useState(null);
    const [selectedStartPointAddress, setSelectedStartPointAddress] = useState(null);
    const [selectedEndPoint, setSelectedEndPoint] = useState(null);
    const [toggleBoxes, setToggleBoxes] = useState(false);

    const selectStartPointHandler = startPoint => {
        setSelectedStartPoint(startPoint.coordinates);
        setSelectedStartPointAddress(startPoint.address);
    }

    let inputComponent = null;
    const addLocationClickHandler = () => {
        if (selectedStartPoint) {
            setToggleBoxes(!toggleBoxes);
        }
    }

    if (!toggleBoxes) {
        inputComponent = <FBox
            onStartPointSelect={selectStartPointHandler}
            onAddLocationClick={addLocationClickHandler}/>
    } else {
        inputComponent = <SideBar
            selectedStartPoint={selectedStartPointAddress}
            onStartPointSelect={selectStartPointHandler}/>
    }

    return (
        <Auxi>
            <Header/>
            {inputComponent}
            {/*<Map startPoint={selectedStartPoint} endpoint={{lat: 6.8569811, lng: 79.87440250000002}}/>*/}
            <Map startPoint={selectedStartPoint} endpoint={selectedEndPoint}/>
        </Auxi>
    );
}
export default Home;