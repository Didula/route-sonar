import React from "react";

import classes from "./SideContent.module.css";
import LocInput from '../../../UI elements/LocInput/LocInput';

const sideContent = () => (
        <div className={classes.SideContent}>
            <LocInput text="Starting point" />
            <hr />
            <LocInput text='Route Point #1' />
            <LocInput text='Route Point #2' />
            <LocInput text='Route Point #2' />
            <LocInput text='Route Point #2' />
            <LocInput text='Route Point #2' />
            <LocInput text='Route Point #2' />
            <LocInput text='Route Point #2' />
            <LocInput text='Route Point #2' />
        </div>
);

export default sideContent;