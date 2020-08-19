import React, {useEffect, useState} from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
// import StartBox from "../StartBox/StartBox";
import FBox from './FloatingBox/FloatingBox';
import Directions from "../Map/MapDirections";
import Map from '../Map/Map'
import SideBar from '../../containers/SideBar/SideBar';

import './Home.module.css';

const Home = () => {
    //todo This component should be a container. will be moved in the future.
    const [selectedStartPoint, setSelectedStartPoint] = useState({lat: 0, lng: 0});
    const selectStartPointHandler = startPoint => {
        setSelectedStartPoint(startPoint);
    }

    return (
        <Auxi>
            <Header/>
            <FBox onStartPointSelect={selectStartPointHandler}/>
            <Map center={selectedStartPoint} endpoint={{lat: 6.8569811, lng: 79.87440250000002}}/>
        </Auxi>
    );
}
export default Home;