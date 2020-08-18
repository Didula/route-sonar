import React from "react";
import classes from './StartBox.module.css'
import PlacesAutocomplete from "../UI/Input/LocationSearchInput/LocationSearchInput";

const StartBox = (props) => {
    return (
        <div className={classes.StartBox}>
            <p>Where are you headed?</p>
            <PlacesAutocomplete onLocationSelect={props.onSelectStartPoint}/>
            <hr/>
            <p>Route details</p>
            <button disabled={true}>Upload Locations</button>
            <button>Add Locations</button>
            <p>Need any assistance? Visit F&Q section</p>
        </div>
    )
}

export default StartBox
