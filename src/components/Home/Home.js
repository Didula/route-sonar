import React from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
import FBox from './FloatingBox/FloatingBox';

import classes from './Home.module.css';

const home = (props) =>
    (
        <Auxi>
            <Header />
            <FBox />
        </Auxi>
    );

export default home;