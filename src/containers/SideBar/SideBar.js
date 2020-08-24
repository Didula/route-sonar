import React from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import SideContent from './SideContent/SideContent';
import SideFooter from './SideFooter/SideFooter';
import AddRoute from '../../UI elements/AddRoute/AddRoute';
import LocInput from "../../UI elements/LocInput/LocInput";

const sideBar = (props) => (
        <div className={classes.SideBar}>
            <SideHeader />
            <SideContent
                selectedStartPoint={props.selectedStartPoint}
                onStartPointSelect={props.onStartPointSelect}/>
            <AddRoute />
            <LocInput/>
            <SideFooter />
        </div>
);

export default sideBar;