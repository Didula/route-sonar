import React, { useState } from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import SideContent from './SideContent/SideContent';
import SideFooter from './SideFooter/SideFooter';
import AddRoute from '../../UI elements/AddRoute/AddRoute';
import LocInput from "../../UI elements/LocInput/LocInput";

const SideBar = ({selectedStartPoint, onStartPointSelect, inputList, setInputList}) => {
    return (
        <div className={classes.SideBar}>
            <SideHeader />
            <SideContent
                selectedStartPoint={selectedStartPoint}
                onStartPointSelect={onStartPointSelect}
                inputList = {inputList}
                setInputList = {setInputList}/>
            <AddRoute 
                inputList = {inputList}
                setInputList = {setInputList}/>
            {/* <LocInput/> */}
            <SideFooter />
        </div>
    );
};

export default SideBar;