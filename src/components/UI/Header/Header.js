import React from 'react';

import Logo from '../Logo/Logo';
import classes from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import HamIcon from '../Buttons/HamIcon/HamIcon';

const header = (props) => (
    <header className={classes.Header}>
        <Logo />
        <NavBar />
        {window.innerWidth < 800 ? <HamIcon/> : null}
    </header>
);

export default header;
