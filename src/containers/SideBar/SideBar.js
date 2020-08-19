import React from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import SideContent from './SideContent/SideContent';
import SideFooter from './SideFooter/SideFooter';
import AddRoute from '../../UI elements/AddRoute/AddRoute';

const sideBar = (props) => (
        <div className={classes.SideBar}>
            <SideHeader />
            <SideContent
                selectedStartPoint={props.selectedStartPoint}
                onStartPointSelect={props.onStartPointSelect}/>
            <AddRoute />
            <SideFooter />
        </div>
);

export default sideBar;