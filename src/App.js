import React from 'react';
import {Switch, Redirect, Route} from "react-router-dom";
import {Helmet} from 'react-helmet';

import Home from './containers/Home/Home';
import Auxi from './hoc/Auxi';
import asyncLoader from "./hoc/AsyncLoader/asyncLoader";
import Header from "./components/UI/Header/Header"
import './styles/global.module.css';

import './styles/main.scss';

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

function App() {
    let routes = (
        <Switch>
            <Route path="/about" component={lazyLoadedAbout}/>
            <Route path="/pricing" component={lazyLoadedPricing}/>
            <Route path="/faq" component={lazyLoadedFAQs}/>
            <Route path="/contact" component={lazyLoadedContact}/>
            <Route path="/dashboard" component={lazyLoadedDashboard}/>
            <Route path="/" component={Home}/>
            <Redirect to={"/"}/>
        </Switch>
    );

    return (
        <Auxi>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            {routes}
        </Auxi>
    );
}

export default App;
