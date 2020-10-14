import React from 'react';
import { withRouter } from 'react-router-dom';

import NavLink from '../NavLink/NavLink';
import classes from './NavBar.module.css';
import Login from '../Buttons/Login/Login';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

const navBar = (props) => {

    const handleLogout = () => {
        props.onLogout();
        props.history.replace('/')
    }

    return (
        <ul className={classes.NavBar}>
            <NavLink link="/about" active>About</NavLink>
            <NavLink link="/pricing">Pricing</NavLink>
            <NavLink link="/faq">FAQ</NavLink>
            <NavLink link="/contact">Contact</NavLink>
            {props.isAuthenticated && <NavLink link="/dashboard">Dashboard</NavLink>}
            {props.isAuthenticated && <span onClick={handleLogout}>Logout</span>}
            {!props.isAuthenticated && <Login loginClick={() => props.setLoginModalOpen(true)}/>}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoginModalOpen: state.auth.isLoginModalOpen,
        isAuthenticated: state.auth.userId !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginModalOpen: (value) => dispatch(actions.setLoginModalOpen(value)),
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(navBar));
