import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";

import classes from "./SideContent.module.css";
import LocInput from '../../UI/Input/LocInput/LocInput';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as actions from "../../../store/actions";


let autoComplete;
const latLngRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/g

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        {componentRestrictions: {country: "lk"}}
    );
    autoComplete.setFields(["name", "address_components", "formatted_address", "place_id"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    if (!query) {
        let matchResult = addressObject.name.match(latLngRegex);
        if (matchResult && matchResult.length > 0) {
            // POST call to get place_id
            // Find a way to minimize cost by fetching only the place_id
            // https://maps.googleapis.com/maps/api/geocode/json?latlng=6.985149,80.280068&key=AIzaSyB_OjxFPgR42bOlSCfJp_S6rEJTqoJMsfI
            updateQuery(matchResult[0]);
        } else {
            // if location is not selected from suggestions, reset the input.
            updateQuery('');
        }
    } else {
        updateQuery(query);
    }
    // console.log(addressObject);
}


const SideContent = (props) => {

    const [query, setQuery] = useState("");
    const [reference, setReference] = useState("")
    const autoCompleteRef = useRef(null);

    const handleLocationInput = (event) => {
        setQuery(event.target.value);
    }

    const handleReferenceInput = (event) => {
        setReference(event.target.value);
    }

    const addPointHandler = (event) => {
        event.preventDefault();
        console.log(query,reference);
    }


    useEffect(() => {
        handleScriptLoad(setQuery, autoCompleteRef);
    }, []);

    return (
        <div>
            <div className={classes.inputForm}>
                <Form className="py-2" onSubmit={addPointHandler}>

                    <span>Enter next destination and reference point</span>
                    <div className="row mx-0 form-inline">
                        <Form.Group className="col-3 pl-0 pr-1" controlId="fromDestinationReference">
                            <Form.Control onChange={handleReferenceInput} value={reference} type="input"
                                          placeholder="Reference" className="col-12"/>
                        </Form.Group>
                        <Form.Group className="col-8 pl-0 pr-1" controlId="formDestination">
                            <Form.Control ref={autoCompleteRef} onChange={handleLocationInput} value={query}
                                          type="input" placeholder="Enter destination" className="col-12"/>
                        </Form.Group>
                        <Button className="col-1 pl-0 pr-1" variant="danger" type="submit">+</Button>
                    </div>
                    {props.markers.length === 2 && <Form.Text className="text-muted">
                        {props.markers.length - 1} location added.
                    </Form.Text>}
                    {props.markers.length > 2 && <Form.Text className="text-muted">
                        {props.markers.length - 1} locations added.
                    </Form.Text>}
                </Form>
            </div>
            <div className={classes.SideContent}>
                <LocInput value={props.selectedStartPoint} onSelectPoint={props.onStartPointSelect}
                          text="Starting point"/>
                <hr/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddingRoutePoint: (point) => dispatch(actions.addWayPoint(point))
    }
}

export default connect(mapStateToProps)(SideContent);
