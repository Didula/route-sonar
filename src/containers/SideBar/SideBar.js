import React, { useState, useEffect } from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import SideContent from './SideContent/SideContent';
import SideFooter from './SideFooter/SideFooter';
import SideRoutePoints from "./SideRoutePoints/SideRoutePoints";
import Login from '../../components/login/login';

const SideBar = (props) => {
    // States
    const [modalShow, setModalShow] = React.useState(false);

    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     console.log('effect', modalShow);
    //     // setModalShow(true);
    // });

    return (
        <div className={classes.SideBar}>
            <SideHeader 
                modalShow = {modalShow}
                setModalShow = {setModalShow}
            />
            <SideContent
                selectedStartPoint={props.selectedStartPoint}
                onStartPointSelect={props.onStartPointSelect}/>
            <SideRoutePoints
                setCurrentLocation={props.setCurrentLocation}
                onSelectLocation={props.onSelectLocation}
                onAddAnotherPoint={props.onAddRoutePoint}
                onLocationSelect={props.onLocationSelect}
                markers={props.markers}/>
            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <SideFooter onOptimize={props.onOptimizeRoutes}/>
        </div>
    );
};

export default SideBar;