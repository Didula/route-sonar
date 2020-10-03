import React from "react";

import classes from "./SideFooter.module.css";
import Btn from '../../UI/Buttons/GenericButton/GenericButton';

const sideFooter = (props) => (
    <div className={classes.SideFooter}>
        {/* <Btn clicked={() => {
        }} btnType='Secondary'>Upload Locations</Btn> */}
        <Btn clicked={props.onOptimize} btnType='Main'>OPTIMIZE</Btn>
    </div>
);

export default sideFooter;
