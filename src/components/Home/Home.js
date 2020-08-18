import React from 'react';

import Auxi from '../../hoc/Auxi';
import Header from '../../containers/LayoutGeneral/Header/Header';
import StartBox from "../StartBox/StartBox";
import SideDrawer from "../../containers/LayoutGeneral/SideDrawer/SideDrawer";
import Map from '../Map/Map'

const home = (props) =>
    //todo This component should be a container. will be moved in the future.
    (
        <Auxi>
            <Header/>
            <Map/>
            <SideDrawer/>
            <StartBox/>
        </Auxi>
    );

export default home;