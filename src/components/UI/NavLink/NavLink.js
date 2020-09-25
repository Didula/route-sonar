import React from 'react';

import classes from './NavLink.module.css';
import {NavLink} from "react-router-dom";

const navLink = (props) => (
    <li className={classes.NavLink}>
        <NavLink
            exact
            to={props.link}
            activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navLink;
