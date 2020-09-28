import React from 'react';

import classes from './Login.module.css';

const login = (props) => (
    <div className={classes.Login}>
        <a href='/'>
        <div className={classes.Icon}>
            <div className={classes.Head}>
            </div>
            <div className={classes.Body}>
            </div>
        </div>
        </a>
        <a href='/'>Login</a>
    </div>
);

export default login;