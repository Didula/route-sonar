import React from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
import StartBox from "../StartBox/StartBox";
import classes from './Home.module.css';

const home = (props) =>
    //todo This component should be a container. will be moved in the future.
    (
        <Auxi>
            <Header />
            <StartBox/>
        </Auxi>
    );

export default home;