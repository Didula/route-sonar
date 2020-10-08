import React from "react";

import classes from "./SideFooter.module.css";
import Btn from '../../UI/Buttons/GenericButton/GenericButton';
import {connect} from "react-redux";

const sideFooter = (props) => (
    <div className={classes.SideFooter}>
        {/* <Btn clicked={() => {
        }} btnType='Secondary'>Upload Locations</Btn> */}
        <Btn disabled={props.isOptimized} clicked={props.onOptimize} btnType='Main'>OPTIMIZE</Btn>
    </div>
);

const mapStateToProps = (state) => {
    return {
        isOptimized: state.map.isOptimized
    }
}

export default connect(mapStateToProps)(sideFooter);
