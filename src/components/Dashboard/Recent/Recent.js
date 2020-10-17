import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";

import classes from "./Recent.module.css";
import RecentTile from "../RecentTile/RecentTile";
import * as actions from "../../../store/actions";

const Recent = (props) => {
    useEffect(() => {
        props.onFetchRecentRoutes(props.customerId,'2020-10-11','2020-10-31',5);
    }, []);
    return (
        <Row>
            {props.recentRoutes.map((route, index) => (
                <Col className={classes.RecentTile} key={route.tripID}><RecentTile title={route.dateTime}/></Col>
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