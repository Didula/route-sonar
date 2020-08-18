import React from 'react';

import Logo from '../../../UI elements/Logo/Logo';
import NavBar from '../Header/NavBar/NavBar';
import classes from './SideDrawer.module.css';
import Backdrop from '../../../UI elements/backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';

const sideDrawer =(props) => {
    let openCloseClasses = [classes.SideDrawer,classes.Close]

    if (props.open) {
        openCloseClasses = [classes.SideDrawer,classes.Open]
    }

    return (
        <Auxi>
            <Backdrop show={props.open} close={props.closed}/>
            <div className={openCloseClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavBar />
                </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;