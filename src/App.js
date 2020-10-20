import React, {useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Helmet} from 'react-helmet';

import Home from './containers/Home/Home';
import Auxi from './hoc/Auxi';
import asyncLoader from "./hoc/AsyncLoader/asyncLoader";
import Header from "./components/UI/Header/Header"
import './styles/global.module.css';

import './styles/main.scss';
import * as actions from "./store/actions";
import {connect} from "react-redux";
import Login from "./components/Login/login";
import {Spinner} from "react-bootstrap";

const lazyLoadedAbout = asyncLoader(() => {
    return import("./containers/About/About");
})
const lazyLoadedPricing = asyncLoader(() => {
    return import("./containers/About/About");
})
const lazyLoadedFAQs = asyncLoader(() => {
    return import("./containers/About/About");
})
const lazyLoadedContact = asyncLoader(() => {
    return import("./containers/About/About");
})
const lazyLoadedDashboard = asyncLoader(() => {
    return import("./containers/Dashboard/Dashboard");
})

const TITLE = 'Route Sonar'

function App(props) {

    let routes = (
        <Switch>
            <Route path="/about" component={lazyLoadedAbout}/>
            <Route path="/pricing" component={lazyLoadedPricing}/>
            <Route path="/faq" component={lazyLoadedFAQs}/>
            <Route path="/contact" component={lazyLoadedContact}/>
            <Route path="/" component={Home}/>
            <Redirect to={"/"}/>
        </Switch>
    );
    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/about" component={lazyLoadedAbout}/>
                <Route path="/pricing" component={lazyLoadedPricing}/>
                <Route path="/faq" component={lazyLoadedFAQs}/>
                <Route path="/contact" component={lazyLoadedContact}/>
                <Route path="/dashboard" component={lazyLoadedDashboard}/>
                <Route path="/" component={Home}/>
                <Redirect to={"/"}/>
            </Switch>)
    }

    return (
        <Auxi>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            {!props.isSidePanelOpen && <Header/>}
            {routes}
            <Login
                show={props.isLoginModalOpen}
                onHide={() => props.setLoginModalOpen(false)}
            />
        </Auxi>
    );
}

const mapStateToProps = (state) => {
    return {
        isSidePanelOpen: state.home.isSidePanelOpen,
        isLoginModalOpen: state.auth.isLoginModalOpen,
        isAuthenticated: state.auth.userId !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginModalOpen: (value) => dispatch(actions.setLoginModalOpen(value))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
