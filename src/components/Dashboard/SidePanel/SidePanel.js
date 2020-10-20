import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Badge, Button, Container} from 'react-bootstrap';

import classes from './SidePanel.module.css';
import logo from '../../../assets/70px-Logo.png';
import overview from '../../../assets/overview.png';
import log from '../../../assets/log.png';
import settings from '../../../assets/settings.png';
import add from '../../../assets/add.png';

const sidePanel = (props) => {

    const onClickTravelToHome = () => {
        props.history.push('/');
    }

    return (
        <Container fluid>
            <img onClick={onClickTravelToHome} src={logo} alt="RouteSONAR" className="img-fluid rs-dashboard-sp-logo"/>
            <ul className={classes.Nav}>
                <li><Button onClick={onClickTravelToHome}  className={classes.AddNew}><img src={add} alt="+"/>Optimize a Route</Button></li>
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

export default withRouter(sidePanel);