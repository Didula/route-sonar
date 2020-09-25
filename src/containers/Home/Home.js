import React, {useState} from "react";
import {useLoadScript} from "@react-google-maps/api";
import FBox from "../../components/FloatingBox/FloatingBox";
import SideBar from "../SideBar/SideBar";
import Auxi from "../../hoc/Auxi";
import Header from "../LayoutGeneral/Header/Header";
import Map from "../../components/Map/Map";
import * as actions from "../../store/actions";
import {connect} from "react-redux";

const LIBRARIES = ["places"];

const Home = (props) => {

    //todo This component should be a container. will be moved in the future.
    const [toggleBoxes, setToggleBoxes] = useState(false);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyB_OjxFPgR42bOlSCfJp_S6rEJTqoJMsfI',
        libraries: LIBRARIES
    });
    if (loadError) return "Error Loading error";
    if (!isLoaded) return "Loading Maps";


    // todo this also has to be taken to state management
    const addLocationClickHandler = () => {
        if (props.startLocation) {
            setToggleBoxes(!toggleBoxes);
        }
    }

    let inputComponent;
    if (!toggleBoxes) {
        inputComponent = <FBox
            onStartPointSelect={props.onSelectingStartPoint}
            onAddLocationClick={addLocationClickHandler}/>
    } else {
        inputComponent = <SideBar
            selectedStartPoint={props.startLocation.address}
            onStartPointSelect={props.onSelectingStartPoint}
            onAddRoutePoint={props.onAddingBlankRoutePoint}
            onOptimizeRoutes={props.onOptimizeRoutes}
            markers={props.markers}/>
    }

    return (
        <Auxi>
            { !toggleBoxes ? <Header/>: null }
            {inputComponent}
            <Map/>
        </Auxi>
    );
}

const mapStateToProps = (state) => {
    return {
        startLocation: state.map.startLocation,
        markers: state.map.markers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectingStartPoint: (startPoint) => {
            dispatch(actions.setStartPoint(startPoint));
            dispatch (actions.setCurrentLocationPoint(startPoint.coordinates));
        },
        onAddingBlankRoutePoint: () => dispatch(actions.addBlankWayPoint()),
        onOptimizeRoutes: () => dispatch(actions.prepareDirectionServiceOptions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
