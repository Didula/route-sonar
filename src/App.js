import React from 'react';

import Home from './components/Home/Home';
import Auxi from './hoc/Auxi';
import {useLoadScript} from "@react-google-maps/api";

const libraries = ["places"];

function App() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyCPi5DOUsq07IHC34mYv6OofNrUCFKw7nM",
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
