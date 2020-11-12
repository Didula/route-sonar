import React from 'react';
import {withRouter} from 'react-router-dom';

import NavLink from '../NavLink/NavLink';
import classes from './NavBar.module.css';
import Login from '../Buttons/Login/Login';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import HamIcon from '../Buttons/HamIcon/HamIcon';

const navBar = (props) => {

    const handleLogout = () => {
        props.onLogout();
        props.history.replace('/')
    }

    const myFunction = () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    return (
        <>
            <ul className={classes.NavBar} id="myLinks">
                <NavLink link="/about" active>About</NavLink>
                <NavLink link="/pricing">Pricing</NavLink>
                <NavLink link="/faq">FAQ</NavLink>
                <NavLink link="/contact">Contact</NavLink>
                {props.isAuthenticated && <NavLink link="/dashboard">Dashboard</NavLink>}
                {props.isAuthenticated && <span onClick={handleLogout}>Logout</span>}
                {!props.isAuthenticated && <Login loginClick={() => props.setLoginModalOpen(true)}/>}
            </ul>
            
            <a href="javascript:void(0);" className={classes.icon} onClick={myFunction}>
                {window.innerWidth < 800 ? <HamIcon/> : null}
            </a>
        </>
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
        onLogout: () => {
            dispatch(actions.logout());
            dispatch(actions.resetMap());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(navBar));
