import React from 'react';

import Home from './components/Home/Home';
import Auxi from './hoc/Auxi';
import {Switch, Redirect, Route} from "react-router-dom";
import asyncLoader from "./hoc/AsyncLoader/asyncLoader";
import Header from "./containers/LayoutGeneral/Header/Header"
import './styles/global.module.css';
import {useLoadScript} from "@react-google-maps/api";





const lazyLoadedAbout = asyncLoader(() => {
    return import("./containers/About/About");
})
const lazyLoadedPricing = asyncLoader(() => {
    return import("./containers/Pricing/Pricing");
})
const lazyLoadedFAQs = asyncLoader(() => {
    return import("./containers/FAQs/FAQs");
})
const lazyLoadedContact = asyncLoader(() => {
    return import("./containers/Contact/Contact");
})


function App() {


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

    return (
        <Auxi>
            <Header/>
            {routes}
        </Auxi>
    );
}

export default App;
