import React from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import SideContent from './SideContent/SideContent';
import SideFooter from './SideFooter/SideFooter';
import SideRoutePoints from "./SideRoutePoints/SideRoutePoints";

const sideBar = (props) => (
    <div className={classes.SideBar}>
        <SideHeader/>
        <SideContent
            selectedStartPoint={props.selectedStartPoint}
            onStartPointSelect={props.onStartPointSelect}/>
        <SideRoutePoints
            onSelectLocation={props.onSelectLocation}
            onAddAnotherPoint={props.onAddRoutePoint}
            onLocationSelect={props.onLocationSelect}
            markers={props.markers}/>
        <SideFooter onOptimize={props.onOptimizeRoutes}/>
    </div>
);

export default sideBar;