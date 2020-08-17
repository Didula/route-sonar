import React from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
import classes from './Home.module.css';

const home = (props) =>
    (
        <Auxi>
            <Header />
        </Auxi>
    );

export default home;