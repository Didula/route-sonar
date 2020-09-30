import React from "react";
import classes from '../About/About.module.css';

const FAQs = () => {
    return(
        <section>
                <div className="container my-5">
                    <div className="mb-5">
                        <span className="text-secondary text-uppercase">Questions?</span>
                        <h1 className="text-capitalize font-weight-bold">We've got answers.</h1>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-3">
                            <h3 className="font-weight-bold">General</h3>
                        </div>
                        <div className="col-md-9">
                            <div className="mb-3">
                                <div className="d-flex align-items-start bg-light p-4">
                                    <div className="mr-3 text-white rounded-circle">
                                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" /></g></g></svg>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-dark"><h6 className="mb-0">What is RouteSonar?</h6></a>
                                            <a href="#" className="text-dark">
                                            </a>
                                        </div>
                                        <p className="text-secondary mt-3">RouteSONAR is an innovative route optimization platform developed to find the most efficient travel route out of all possible outcomes mapped across the multiple last mile delivery locations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-start bg-light p-4">
                                    <div className="mr-3 text-white rounded-circle">
                                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" /></g></g></svg>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-dark"><h6 className="mb-0">Who are the users of RouteSONAR?</h6></a>
                                            <a href="#" className="text-dark">
                                            </a>
                                        </div>
                                        <p className="text-secondary mt-3">RouteSonar is ideal for Courier companies, E-commerce companies, Distributors & Agents, Maintenance teams, Dynamic staff transport services and personal users who wants to get multiple tasks [GC1] done in one go.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-start bg-light p-4">
                                    <div className="mr-3 text-white rounded-circle">
                                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" /></g></g></svg>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-dark"><h6 className="mb-0">Why use RouteSONAR?</h6></a>
                                            <a href="#" className="text-dark">
                                            </a>
                                        </div>
                                        <p className="text-secondary mt-3">By providing its users with the shortest and optimal travel route, RouteSONAR can significantly reduce fuel cost and wastage of time. This allows RouteSONAR users to handle more delivery locations and maximize the usage of vehicle fleet for delivery.</p>
                                        <p className="text-secondary mt-3">It also helps to bring down delivery cost drastically which creates a competitive advantage over other businesses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-start bg-light p-4">
                                    <div className="mr-3 text-white rounded-circle">
                                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" /></g></g></svg>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-dark"><h6 className="mb-0">How much of an efficiency improvement can I expect out of this?</h6></a>
                                            <a href="#" className="text-dark">
                                            </a>
                                        </div>
                                        <p className="text-secondary mt-3">We estimate a cost improvement of 30% overall where the on-road efficiency can range from 20% to 30% based on the sheer volume of the orders handled.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-3">
                            <h3 className="font-weight-bold">Pricing</h3>
                        </div>
                        <div className="col-md-9">
                            <div className="mb-3">
                                <div className="d-flex align-items-start bg-light p-4">
                                    <div className="mr-3 text-white rounded-circle">
                                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" /></g></g></svg>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-dark"><h6 className="mb-0">What are the available pricing plans?</h6></a>
                                            <a href="#" className="text-dark">
                                            </a>
                                        </div>
                                        <p className="text-secondary mt-3">We offer two pricing plans – Pay as you Go & location bundles.</p>
                                        <p className="text-secondary mt-3">Pay as you Go – You will be charged for the usage at the end of the month based on the number of locations you process.</p>
                                        <p className="text-secondary mt-3">Location bundle – You may pre-purchase a location bundle based on your historical usage and pay for the additional usage at the end of each month.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-start bg-light p-4">
                                    <div className="mr-3 text-white rounded-circle">
                                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" /></g></g></svg>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-dark"><h6 className="mb-0">What is the advantage if I go for a bundle package?</h6></a>
                                            <a href="#" className="text-dark">
                                            </a>
                                        </div>
                                        <p className="text-secondary mt-3">Compared to the Pay as you Go plan, Bundle packages are discounted by more than 20% with additional usage charged at lower rates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-3">
                            <h3 className="font-weight-bold">Join With Us</h3>
                        </div>
                        <div className="col-md-9">
                            <div className="mb-3">
                                <div className="d-flex align-items-start bg-light p-4">
                                    <div className="mr-3 text-white rounded-circle">
                                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" /></g></g></svg>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-dark"><h6 className="mb-0">This is fantastic! How do I sign up?</h6></a>
                                            <a href="#" className="text-dark">
                                            </a>
                                        </div>
                                        <p className="text-secondary mt-3">You can email us at hello@routesonar.com or call us at 0768 426 882</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default FAQs;
