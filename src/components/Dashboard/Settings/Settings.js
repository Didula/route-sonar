import React, {useEffect} from 'react';
import {Button, Card, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import {connect} from "react-redux";

import {Doughnut} from "react-chartjs-2";
import classes from './Settings.module.css';
import * as actions from "../../../store/actions";

const Settings = (props) => {
    const {handleSubmit, register, errors, reset, watch} = useForm();
    const watchNewPassword = watch('newPassword');
    useEffect(() => {
        props.onFetchingQuotaUsage(props.customerId);
    }, []);
    const data = {
        labels: [
            'Used',
            'Remaining'
        ],
        datasets: [{
            data: [props.usedQuota, props.remainingQuota],
            backgroundColor: [
                '#FF6384',
                '#36A2EB'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB'
            ]
        }]
    };

    const onSubmit = (values) => {
        console.log(values)
    }

    const onReset = () => {
        reset();
    }

    return (
        <Container fluid>
            <Row>
                <h1>Settings</h1><br/>
            </Row>
            <Row className={classes.Contents}>
                <Col className={classes.Box}>
                    <Card>
                        <Card.Header className={classes.Headers}>Change Password</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl
                                    name="currentPassword"
                                    type="password"
                                    placeholder="Current Password"
                                    ref={register({
                                        required: true
                                    })}
                                />
                                {(errors.currentPassword && errors.currentPassword.type === "required") &&
                                <Form.Text className="text-error">
                                    Current password is required!
                                </Form.Text>}
                                <br/>
                                <FormControl
                                    name="newPassword"
                                    type="password"
                                    placeholder="New Password"
                                    ref={register({
                                        required: true
                                    })}/>
                                {(errors.newPassword && errors.newPassword.type === "required") &&
                                <Form.Text className="text-error">
                                    New password is required!
                                </Form.Text>}
                                <br/>
                                <FormControl
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm New Password"
                                    ref={register({
                                        required: true,
                                        pattern: {
                                            value: new RegExp(watchNewPassword, 'g'),
                                            message: "Passwords should match"
                                        }
                                    })}/>
                                {(errors.confirmPassword && errors.confirmPassword.type === "required") &&
                                <Form.Text className="text-error">
                                    Please enter new password confirmation
                                </Form.Text>}
                                {(errors.confirmPassword && errors.confirmPassword.message) &&
                                <Form.Text className="text-error">
                                    {errors.confirmPassword.message}
                                </Form.Text>}
                                <br/>
                                <Button
                                    className="mr-2"
                                    type="submit">
                                    Change Password
                                </Button>
                                <Button
                                    onClick={onReset}
                                    variant="warning">
                                    Reset
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={classes.Box}>
                    <Card className="text-center">
                        <Card.Header className={classes.Headers}>Usage Meter</Card.Header>
                        <Card.Body>
                            <Doughnut data={data}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        usedQuota: state.dashboardSettings.usedQuota,
        remainingQuota: state.dashboardSettings.remainingQuota,
        customerId: state.auth.customerId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchingQuotaUsage: (customerId) => dispatch(actions.fetchAggregatedQuota(customerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);