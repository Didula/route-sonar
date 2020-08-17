import React, {Component} from "react";
import classes from './StartBox.module.css'

class StartBox extends Component {
    render() {
        return(
            <div className={classes.StartBox}>
                <p>Where are you headed?</p>
                <input placeholder="Starting point"/>
                <hr/>
                <p>Route details</p>
                <button>Upload Locations</button>
                <button>Add Locations</button>
                <p>Need any assistance? Visit F&Q section</p>
            </div>
        )
    }
}

export default StartBox
