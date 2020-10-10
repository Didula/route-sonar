import React, {useEffect} from "react";

import classes from "./SideBar.module.css";

import SideHeader from './SideHeader/SideHeader';
import SideContent from './SideContent/SideContent';
import SideFooter from './SideFooter/SideFooter';
import SideRoutePoints from "./SideRoutePoints/SideRoutePoints";
import Login from '../../components/Login/login';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

const SideBar = (props) => {

    useEffect(() => {
        return () => {
            // on component destroy.
            props.setSidePanelOpen(false);
        }
    },[])

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={classes.SideBar}>
            <SideHeader 
                modalShow = {modalShow}
                setModalShow = {setModalShow}
            />
            <SideContent
                selectedStartPoint={props.selectedStartPoint}
                onStartPointSelect={props.onStartPointSelect}/>
            <SideRoutePoints
                setCurrentLocation={props.setCurrentLocation}
                onSelectLocation={props.onSelectLocation}
                onAddAnotherPoint={props.onAddRoutePoint}
                onLocationSelect={props.onLocationSelect}
                markers={props.markers}/>
            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <SideFooter
                onOptimize={props.onOptimizeRoutes}
                showToast={props.showToast}
                setShowToast={props.setShowToast}/>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSidePanelOpen: (value) => dispatch(actions.setSidePanelOpen(value))
    }
}

export default connect(null, mapDispatchToProps)(SideBar);
