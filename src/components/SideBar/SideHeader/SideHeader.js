import React from "react";
import { withRouter } from 'react-router-dom';

import classes from "./SideHeader.module.css";
import Logo from '../../UI/Logo/Logo';
import Button from 'react-bootstrap/Button';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

const sideHeader = (props) => {

    const onDashboardButtonSelect = () => {
        if(props.isAuthenticated)
            props.history.push('/dashboard');
    }

    return (
        <div className={classes.SideHeader}>
            <Logo/>
            <div>
                {!props.isAuthenticated &&
                <Button
                    variant="outline-primary"
                    className="btn-fill"
                    onClick={() => props.setLoginModalOpen(true)}>LOG IN
                </Button>
                }
                {props.isAuthenticated &&
                <Button
                    variant="outline-primary"
                    className="btn-fill"
                    onClick={() => onDashboardButtonSelect()}>Dashboard
                </Button>
                }
                {props.isAuthenticated &&
                <Button
                    variant="outline-danger"
                    className="btn-fill"
                    onClick={() => props.onLogout()}>LOG OUT
                </Button>
                }
                {/*<div className={classes.userProfile}>
                    <img src="https://img.icons8.com/emoji/48/000000/guide-dog--v1.png" alt="avatar"/>
                </div>*/}
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        isLoginModalOpen: state.auth.isLoginModalOpen,
        isAuthenticated: state.auth.userId !== null,
        isSidePanelOpen: state.home.isSidePanelOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginModalOpen: (value) => dispatch(actions.setLoginModalOpen(value)),
        onLogout: () => {
            dispatch(actions.logout());
            dispatch(actions.setSidePanelOpen(false));
            dispatch(actions.resetMap());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(sideHeader));
