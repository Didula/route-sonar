import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";

import classes from "./Recent.module.css";
import RecentTile from "../RecentTile/RecentTile";
import * as actions from "../../../store/actions";

const Recent = (props) => {

    const fetchLimit = process.env.REACT_APP_RECENT_ROUTES_FETCH_LIMIT;
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - process.env.REACT_APP_RECENT_ROUTES_DATE_FRAME);

    useEffect(() => {
        props.onFetchRecentRoutes(props.customerId, startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'), fetchLimit);
    }, []);
    return (
        <Row>
            {props.recentRoutes.map((route, index) => (
                <Col className={classes.RecentTile} key={route.tripID}>
                    <RecentTile title={route.dateTime} tripID = {route.tripID}/>
                </Col>
            ))
            }
        </Row>
    );
}

const mapStateToProps = (state) => {
    return {
        recentRoutes: state.dashboardSummary.recentRoutes,
        customerId: state.auth.customerId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchRecentRoutes: (customerId, startDate, endDate, limit) => dispatch(actions.fetchRecentRoutes(customerId, startDate, endDate, limit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recent);