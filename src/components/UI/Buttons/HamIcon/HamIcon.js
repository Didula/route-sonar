import React from "react";

import classes from './HamIcon.module.css';

const hamIcon = (props) => (
    <a href='/'>
        <div className={classes.HamIcon}>
            <div></div>
            <div></div>
            <div></div>
        </div> </a>
);

export default hamIcon;