import React from 'react';
import {withRouter} from 'react-router-dom';

import rsLogo from '../../../assets/site-header-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {

    const onClickTravelToHome = () => {
        props.history.push('/');
    }

    return (
        <div className={classes.Logo}>
            <img onClick={onClickTravelToHome} src={rsLogo} alt="RouteSONAR"/>
        </div>
    )
};

export default withRouter(logo);
