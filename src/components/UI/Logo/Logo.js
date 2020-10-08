import React from 'react';

import rsLogo from '../../../assets/site-header-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={rsLogo} alt="RouteSONAR" />
    </div>
);

export default logo;
