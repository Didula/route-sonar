import React from 'react';

import Logo from '../../../UI elements/Logo/Logo';
import classes from './Header.module.css';
import NavBar from './NavBar/NavBar';

const header = () => (
    <header className={classes.Header}>
        <Logo />
        <NavBar />
    </header>
);

export default header;