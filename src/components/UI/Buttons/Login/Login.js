import React from 'react';

import classes from './Login.module.css';

const login = (props) => (
    <div onClick={props.loginClick} className={classes.Login}>
{/*
        @thish1991 remove <a> tags.
*/}
        <a>
        <div className={classes.Icon}>
            <div className={classes.Head}>
            </div>
            <div className={classes.Body}>
            </div>
        </div>
        </a>
        <a>Login</a>
    </div>
);

export default login;