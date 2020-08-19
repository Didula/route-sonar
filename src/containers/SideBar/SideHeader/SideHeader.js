import React from "react";

import classes from "./SideHeader.module.css";
import Logo from '../../../UI elements/Logo/Logo';
import HamIcon from '../../LayoutGeneral/Header/HamIcon/HamIcon';

const sideHeader = () => (
    <div className={classes.SideHeader}>
        <Logo />
        <HamIcon />
    </div>
);

export default sideHeader;