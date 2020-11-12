import React from 'react';

import Logo from '../Logo/Logo';
import classes from './Header.module.css';
import NavBar from '../NavBar/NavBar';

const header = (props) => (
    <header className={classes.Header}>
        <Logo />
        <NavBar />
    </header>
);

export default header;
