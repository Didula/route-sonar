import React from "react";
import {Button} from 'react-bootstrap';

import RouteInfoModal from "../../RouteInfoModal/RouteInfoModal";

import classes from "./SideFooter.module.css";
import {connect} from "react-redux";

const sideFooter = (props) => (
        <div className={classes.SideFooter}>
            <Button disabled={props.isOptimized} variant="danger" onClick={props.onOptimize}>Optimize</Button>
            {/*<Btn disabled={props.isOptimized} clicked={props.onOptimize} btnType='Main'>OPTIMIZE</Btn>*/}
            {/*<Btn disabled={props.isOptimized} clicked={props.onOptimize} btnType='Main'>OPTIMIZE</Btn>*/}
            <Button disabled={!props.isOptimized} variant="danger" onClick={props.modalDisplay}>Send</Button>
        </div>
);

const mapStateToProps = (state) => {
    return {
        isOptimized: state.map.isOptimized
    }
}

export default connect(mapStateToProps)(sideFooter);
