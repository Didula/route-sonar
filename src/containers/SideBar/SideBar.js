import React, { useState, useEffect } from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import SideContent from './SideContent/SideContent';
import SideFooter from './SideFooter/SideFooter';
import AddRoute from '../../UI elements/AddRoute/AddRoute';
import Login from '../../components/login/login';

const SideBar = ({selectedStartPoint, onStartPointSelect, inputList, setInputList}) => {
    // States
    const [modalShow, setModalShow] = React.useState(false); 

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
                setInputList = {setInputList}
                modalShow = {modalShow}
                setModalShow = {setModalShow}/>
            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <SideFooter />
        </div>
    );
};

export default SideBar;