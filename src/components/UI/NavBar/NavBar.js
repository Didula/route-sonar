import React from 'react';

import NavLink from '../NavLink/NavLink';
import classes from './NavBar.module.css';
import Login from '../Buttons/Login/Login';

const navBar = (props) => (
    <ul className={classes.NavBar}>
        <NavLink link="/about" active>About</NavLink>
        <NavLink link="/pricing">Pricing</NavLink>
        <NavLink link="/faq">FAQ</NavLink>
        <NavLink link="/contact">Contact</NavLink>
        <Login link='/' />
    </ul>
);

export default navBar;
