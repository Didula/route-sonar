import React from "react";
import classes from '../About/About.module.css';

const Pricing = () => {
    return(
        <section className={classes.rsPricingSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 mb-5">
                            <h2 className="text-center">Pricing Plans</h2>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table purple">
                                <div className="d-flex justify-content-center">
                                    <div className="pricing-label">Lite</div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="pricing-left">
                                        <h2>Basic Pack</h2>
                                        <h5>Made for starters</h5>
                                    </div>
                                    <div className="pricing-right">
                                        <h2 className="pricing-loc text-right">5000</h2>
                                        <div className="pricing-loc-txt text-right">locations</div>
                                    </div>
                                </div>
                                <div className="pricing-features">
                                    <div className="feature">Locations<span>5000</span></div>
                                    <div className="feature">Support<span>Only Mail</span></div>
                                </div>
                                <div className="price-tag">
                                    <span className="symbol">LKR &nbsp;</span>
                                    <span className="amount">35,000</span>
                                    <span className="after">/month</span>
                                </div>
                                <div className="text-center">LKR 8 per additional request</div>
                                <a className="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table red">
                                <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="pricing-label">Pro</div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="pricing-left">
                                        <h2>Extended Pack</h2>
                                        <h5>Made for growth</h5>
                                    </div>
                                    <div className="pricing-right">
                                        <h2 className="pricing-loc text-right">10000</h2>
                                        <div className="pricing-loc-txt text-right">locations</div>
                                    </div>
                                </div>
                                <div className="pricing-features">
                                    <div className="feature">Locations<span>10000</span></div>
                                    <div className="feature">Support<span>Mail/Phone</span></div>
                                </div>
                                <div className="price-tag">
                                    <span className="symbol">LKR &nbsp;</span>
                                    <span className="amount">60,000</span>
                                    <span className="after">/month</span>
                                </div>
                                <div className="text-center">LKR 7 per additional request</div>
                                <a className="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table turquoise">
                                <div className="d-flex justify-content-center">
                                    <div className="pricing-label">Enterprise</div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="pricing-left">
                                        <h2>Extended Pack</h2>
                                        <h5>Made for corporate</h5>
                                    </div>
                                    <div className="pricing-right">
                                        <h2 className="pricing-loc text-right">25000</h2>
                                        <div className="pricing-loc-txt text-right">locations</div>
                                    </div>
                                </div>
                                <div className="pricing-features">
                                    <div className="feature">Locations<span>25000</span></div>
                                    <div className="feature">Support<span>Mail/Phone</span></div>
                                    <div className="feature">Advanced Analytics Dashboard</div>
                                </div>
                                <div className="price-tag">
                                    <span className="symbol">LKR &nbsp;</span>
                                    <span className="amount">150,000</span>
                                    <span className="after">/month</span>
                                </div>
                                <div className="text-center">LKR 6 per additional request</div>
                                <a className="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Pricing;
