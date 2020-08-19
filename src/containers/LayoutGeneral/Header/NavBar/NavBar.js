import React from 'react';

import NavLink from '../../../../UI elements/NavLink/NavLink';
import classes from './NavBar.module.css';
import Login from '../Login/Login';

const navBar = (props) => (
    <ul className={classes.NavBar}>
        <NavLink link="/" active>About</NavLink>
        <NavLink link="/">Pricing</NavLink>
        <NavLink link="/">F&Q</NavLink>
        <NavLink link="/">Contact</NavLink>
        <Login />
    </ul>
);

export default navBar;