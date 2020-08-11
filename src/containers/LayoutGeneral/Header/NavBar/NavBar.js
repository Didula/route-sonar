import React from 'react';

import NavLink from '../../../../UI elements/NavLink/NavLink';
import classes from './NavBar.module.css';

const navBar = (props) => (
    <ul className={classes.NavBar}>
        <NavLink link="/" active>About</NavLink>
        <NavLink link="/">Pricing</NavLink>
        <NavLink link="/">F&Q</NavLink>
        <NavLink link="/">Contact</NavLink>
        <NavLink link="/">Login</NavLink>
    </ul>
);

export default navBar;