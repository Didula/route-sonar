import React from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import LocInput from '../../UI elements/LocInput/LocInput';

const sideBar = () => (
    <div className={classes.SideBar}>
        <SideHeader />
        <div>
            <h5>Start from </h5>
            <LocInput />
        </div>
        <hr />
        <div>
            <LocInput text='Route Point #1' />
            <LocInput text='Route Point #2' />
        </div>
    </div>
);

export default sideBar;