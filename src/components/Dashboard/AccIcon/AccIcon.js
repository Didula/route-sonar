import React from 'react';
import {Popover, OverlayTrigger, ListGroup} from "react-bootstrap";

import propic from '../../../assets/propic.jpg';
import classes from './AccIcon.module.css';

const accIcon = () => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Sammani Perera</Popover.Title>
            <Popover.Content>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        Account Settings
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Account Usage
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Travel History
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong style={{color: "red"}}>Log Out</strong>
                    </ListGroup.Item>
                </ListGroup>
            </Popover.Content>
        </Popover>
    );

    return (
            <div className={classes.Icon}>
                <OverlayTrigger rootClose={true} trigger="click" placement="bottom" overlay={popover}>
                    <img src={propic} alt="Profile" />
                </OverlayTrigger>
            </div>
    )
}

export default accIcon;