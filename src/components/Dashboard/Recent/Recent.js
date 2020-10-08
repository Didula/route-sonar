import React from "react";
import {Col, Row} from "react-bootstrap";

import classes from "./Recent.module.css";
import RecentTile from "../RecentTile/RecentTile";

const recent = () => {

        const recent = ["Recent(Reference) #1", "Recent(Reference) #2", "Recent(Reference) #3"];

        return (
                <Row>
                    {recent.map((recent, index) => (
                        <Col className={classes.RecentTile} key={index}><RecentTile title={recent}/></Col>
                    ))
                    }
                </Row>
        );
    }

export default recent;