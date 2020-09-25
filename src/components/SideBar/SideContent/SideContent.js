import React from "react";
import {connect} from "react-redux";

import classes from "./SideContent.module.css";
import LocInput from '../../UI/Input/LocInput/LocInput';

import Form from 'react-bootstrap/Form'

const sideContent = (props) => (
    <div>
        <div className={classes.inputForm}>
            <Form className = "py-2">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter next destination and reference point</Form.Label>
                    <div className = "row">
                        <div className = "col-8 pr-1">
                            <Form.Control type="input" placeholder="Enter destination" className = "col-12" />
                        </div>
                        <div className = "col-4 pl-0">
                            <Form.Control type="input" placeholder="Reference" className = "col-12" />
                        </div>
                    </div>
                    {props.markers.length === 2 && <Form.Text className="text-muted">
                        {props.markers.length - 1} location added.
                    </Form.Text>}
                    {props.markers.length > 2 && <Form.Text className="text-muted">
                        {props.markers.length - 1} locations added.
                    </Form.Text>}
                </Form.Group>
            </Form>
        </div>
        <div className={classes.SideContent}>
            <LocInput value={props.selectedStartPoint} onSelectPoint={props.onStartPointSelect} text="Starting point" />
            <hr />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers
    }
}

export default connect(mapStateToProps)(sideContent);
