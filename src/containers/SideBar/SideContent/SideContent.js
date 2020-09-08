import React from "react";

import classes from "./SideContent.module.css";
import LocInput from '../../../UI elements/LocInput/LocInput';

const sideContent = (props) => (
        <div className={classes.SideContent}>
            <LocInput value={props.selectedStartPoint} onSelectPoint={props.onStartPointSelect} text="Starting point" />
            <hr />
        </div>
);

export default sideContent;