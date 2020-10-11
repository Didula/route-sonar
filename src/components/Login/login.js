import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({show, onHide}) => {

    return (
        <Modal show={show} onHide={onHide} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Please Sign In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="username" className="mt-3 mb-4">
                        <Form.Control size="lg" type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group controlId="password" className="my-4">
                        <Form.Control size="lg" type="password" placeholder="Password"/>
                    </Form.Group>
                    <div className="row mx-1">
                        <Button size="lg" className="col-12 mt-4" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    {/*<hr/>
                    <div className="text-center">Don't want to complete the form?</div>
                    <hr/>
                    <div className="row">
                        <Button size="md" className="offset-1 col-4 d-flex align-items-center btn-outline">
                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                 className="bi bi-arrow-down-left-circle-fill" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
                            </svg>
                            Login With Google
                        </Button>
                        <Button size="md" className="offset-1 col-4 d-flex align-items-center btn-outline">
                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                 className="bi bi-arrow-down-left-circle-fill" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
                            </svg>
                            Login With Facebook
                        </Button>
                    </div>
                    <div className="my-3 text-center">New User ? &nbsp;<a href="https://www.google.com/"
                                                                          target="_blank" rel="noopener noreferrer">Create an account</a></div>
                    <div className="text-center ternary-txt">This site is protected by reCAPTCHA and the Google Privacy
                        Policy and Terms of Service apply.
                    </div>*/}
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Login;
