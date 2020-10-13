import React, {useState} from "react";
import {Button} from 'react-bootstrap';

import classes from "./SideFooter.module.css";
import {connect} from "react-redux";
import RouteInfoModal from "../../RouteInfoModal/RouteInfoModal";

const SideFooter = (props) => {

    let [showRouteModal, setShowRouteModal] = useState(false);

    const togglePopup = () => {
        setShowRouteModal(
            showRouteModal = !showRouteModal
        );
    }

    const openRouteInfoModal = () => {
        togglePopup();
    };


    return (
        <div className={classes.SideFooter}>
            <Button disabled={props.isOptimized || props.markers.length <= 1} variant="danger" onClick={props.onOptimize}>Optimize</Button>
            <Button disabled={!props.isOptimized} variant="danger" onClick={openRouteInfoModal}>Send</Button>
            {showRouteModal ? <RouteInfoModal show={showRouteModal} onHide={() => setShowRouteModal(false)}/> : ''}
        </div>
        );
};

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers,
        isOptimized: state.map.isOptimized
    }
}

export default connect(mapStateToProps)(SideFooter);
