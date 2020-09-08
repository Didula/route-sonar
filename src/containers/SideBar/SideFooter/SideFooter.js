import React from "react";

import classes from "./SideFooter.module.css";
import Btn from '../../../UI elements/Button/Btn';
import AddRoute from '../../../UI elements/AddRoute/AddRoute';

const sideFooter = (props) => (
    <div className={classes.SideFooter}>
        <Btn clicked={() => {}} btnType='Secondary'>Upload Locations</Btn>
        <Btn clicked={props.onOptimize} btnType='Main'>Optimize my Route</Btn>
    </div>
);

export default sideFooter;