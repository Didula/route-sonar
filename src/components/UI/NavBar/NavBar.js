import React from 'react';

import NavLink from '../NavLink/NavLink';
import classes from './NavBar.module.css';
import Login from '../Buttons/Login/Login';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

const navBar = (props) => (
    <ul className={classes.NavBar}>
        <NavLink link="/about" active>About</NavLink>
        <NavLink link="/pricing">Pricing</NavLink>
        <NavLink link="/faq">FAQ</NavLink>
        <NavLink link="/contact">Contact</NavLink>
        <Login loginClick={() => props.setLoginModalOpen(true)}/>
    </ul>
);

const mapStateToProps = (state) => {
    return {
        isLoginModalOpen: state.auth.isLoginModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginModalOpen: (value) => dispatch(actions.setLoginModalOpen(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navBar);
