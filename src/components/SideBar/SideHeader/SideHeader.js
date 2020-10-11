import React from "react";

import classes from "./SideHeader.module.css";
import Logo from '../../UI/Logo/Logo';
import Button from 'react-bootstrap/Button';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

const sideHeader = (props) => {

    return (
        <div className={classes.SideHeader}>
            <Logo/>
            <div>
                <Button variant="outline-primary" className="btn-fill" onClick={() => props.setLoginModalOpen(true)}>LOG IN</Button>
                <div className={classes.userProfile}>
                    <img src="https://img.icons8.com/emoji/48/000000/guide-dog--v1.png" alt="avatar"/>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginModalOpen: (value) => dispatch(actions.setLoginModalOpen(value))
    }
}

export default connect(null, mapDispatchToProps)(sideHeader);
