import React from "react";

import classes from "./SideHeader.module.css";
import Logo from '../../../UI elements/Logo/Logo';
import Button from 'react-bootstrap/Button';
import HamIcon from '../../LayoutGeneral/Header/HamIcon/HamIcon';

const sideHeader = ({modalShow, setModalShow}) => {
    const togglePopup = () => {
        //  modalShow = props.modalShow;  
        setModalShow(
            modalShow = !modalShow
        );  
        console.log("states", modalShow);
    }

    const addRouteClickHandler = () => {
        togglePopup();
    };

    return (
        <div className = {classes.SideHeader}>
            <Logo />
            <div>
                <Button variant="outline-primary" className = "btn-fill" onClick={addRouteClickHandler}>LOG IN</Button>
                <div className = {classes.userProfile}>
                    <img src="https://img.icons8.com/emoji/48/000000/guide-dog--v1.png"/>
                </div>
            </div>
            {/* <HamIcon /> */}
        </div>
    );
};

export default sideHeader;