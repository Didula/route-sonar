import React from 'react';
import {Container , Button, Badge} from 'react-bootstrap';

import classes from './SidePanel.module.css';
import logo from '../../../assets/70px-Logo.png';
import overview from '../../../assets/overview.png';
import log from '../../../assets/log.png';
import settings from '../../../assets/settings.png';
import add from '../../../assets/add.png';
import {Link} from "react-router-dom";

const sidePanel = () => {
    return (
        <Container fluid>
            <img src={logo} alt="RouteSONAR" className="img-fluid"/>
            <ul className={classes.Nav}>
                <li><Button className={classes.AddNew}><img src={add} alt="+"/>Optimize a Route</Button></li>
                <br/><hr/>
                <li><Link to={'/dashboard'} style={{textDecoration:"none"}}>
                    <Button variant="link" className={classes.NavItem}>
                        <img src={overview} alt="+"/>
                        Overview
                    </Button>
                </Link>
                </li>
                <li><Link to={'/dashboard/travel-log'} style={{textDecoration:"none"}}>
                    <Button variant="link" className={classes.NavItem}>
                        <img src={log} alt="+"/>
                        Travel Log &nbsp;<Badge pill variant="primary">05</Badge>
                    </Button>
                </Link>
                </li>
                <li><Link to={'/dashboard/settings'} style={{textDecoration:"none"}}>
                    <Button variant="link" className={classes.NavItem}>
                        <img src={settings} alt="+"/>Settings</Button>
                </Link>
                </li>
                <hr/><br/>
                <li><Button variant="link" className={classes.LogOut}>Need any assistance?</Button></li>
            </ul>
        </Container>
    )
}

export default sidePanel;