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
            onAddAnotherPoint={props.onAddRoutePoint}
            onLocationSelect={props.onLocationSelect}
            routePointInputFields={props.routePoints}/>
        <SideFooter onOptimize={props.onOptimizeRoutes}/>
    </div>
);

export default sideBar;