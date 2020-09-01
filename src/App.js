import React from 'react';

import Home from './components/Home/Home';
import Auxi from './hoc/Auxi';
import {useLoadScript} from "@react-google-maps/api";

import './styles/global.module.css';

const libraries = ["places"];

function App() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyB_OjxFPgR42bOlSCfJp_S6rEJTqoJMsfI",
        libraries
    });
    if (loadError) return "Error Loading error";
    if (!isLoaded) return "Loading Maps";
    return (
        <Auxi>
            <Home/>
        </Auxi>
    );
}

export default App;
