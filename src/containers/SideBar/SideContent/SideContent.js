import React from "react";

import classes from "./SideContent.module.css";
import LocInput from '../../../UI elements/LocInput/LocInput';

import Form from 'react-bootstrap/Form'

const sideContent = (props) => (
    <div>
        <div className={classes.inputForm}>
            <Form className = "py-2">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter next destination and reference point</Form.Label>
                    <div className = "row">
                        <div className = "col-8">
                            <Form.Control type="input" placeholder="Enter destination" className = "col-6" />
                        </div>
                        <div className = "col-4">
                            <Form.Control type="input" placeholder="Reference" className = "col-6" />
                        </div>
                    </div>
                    <Form.Text className="text-muted">
                        2 locations added.
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
        <div className={classes.SideContent}>
            <LocInput value={props.selectedStartPoint} onSelectPoint={props.onStartPointSelect} text="Starting point" />
            <hr />
        </div>
    </div>
);

export default sideContent;
