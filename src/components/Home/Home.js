import React, {useEffect, useState} from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
// import StartBox from "../StartBox/StartBox";
import FBox from './FloatingBox/FloatingBox';
import Map from '../Map/Map'

const Home = () => {
    //todo This component should be a container. will be moved in the future.
    const [selectedStartPoint, setSelectedStartPoint] = useState({lat: 0, lng: 0});
    const selectStartPointHandler = startPoint => {
        setSelectedStartPoint(startPoint);
    }

    useEffect(() => {
        const geolocationOptions = {
            enableHighAccuracy: true,
            timeout: 1000 * 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
            maximumAge: 1000 * 3600 * 24 // 24 hour
        };
        if(navigator && navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    const currentLocation = {lat: 0, lng: 0};
                    currentLocation.lat = position.coords.latitude;
                    currentLocation.lng = position.coords.longitude;
                    setSelectedStartPoint(currentLocation)
                },
                ()=>{console.log("Geolocation fetching error")},
                geolocationOptions)
        }
    },[])

    return (
        <Auxi>
            <Header/>
            <FBox onSelectStartPoint={selectStartPointHandler}/>
            <Map center={selectedStartPoint}/>
        </Auxi>
    );
}
export default Home;