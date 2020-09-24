import React from 'react';

import NavLink from '../../../../UI elements/NavLink/NavLink';
import classes from './NavBar.module.css';
import Login from '../Login/Login';

const navBar = (props) => (
    <ul className={classes.NavBar}>
        <NavLink link="/about" active>About</NavLink>
        <NavLink link="/pricing">Pricing</NavLink>
        <NavLink link="/faq">F&Q</NavLink>
        <NavLink link="/contact">Contact</NavLink>
        <Login link='/' />
    </ul>
);

export default navBar;
