import React from "react";

import classes from "./SideContent.module.css";
import LocInput from '../../../UI elements/LocInput/LocInput';

import Form from 'react-bootstrap/Form'

const sideContent = (props) => (
    <>
        <div className={classes.inputForm}>
            <Form className = "py-2">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter next destination and reference point</Form.Label>
                    <div class = "row">
                        <div class = "col-8">
                            <Form.Control type="input" placeholder="Enter destination" class = "col-6" />
                        </div>
                        <div class = "col-4">
                            <Form.Control type="input" placeholder="Reference" class = "col-6" />
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
    </>
);

export default sideContent;