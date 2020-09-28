import React from "react";

import classes from "./SideHeader.module.css";
import Logo from '../../UI/Logo/Logo';
import Button from 'react-bootstrap/Button';

const sideHeader = ({modalShow, setModalShow}) => {
    const togglePopup = () => {
        setModalShow(
            modalShow = !modalShow
        );
    }

    const addRouteClickHandler = () => {
        togglePopup();
    };

    return (
        <div className={classes.SideHeader}>
            <Logo/>
            <div>
                <Button variant="outline-primary" className="btn-fill" onClick={addRouteClickHandler}>LOG IN</Button>
                <div className={classes.userProfile}>
                    <img src="https://img.icons8.com/emoji/48/000000/guide-dog--v1.png" alt="avatar"/>
                </div>
            </div>
        </div>
    );
};

export default sideHeader;
