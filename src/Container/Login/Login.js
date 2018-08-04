import React, { Component } from "react";
import classes from './Login.css';
import Loginform from '../../Component/Loginform/Loginform';

class Login extends Component {
    render() {
        return (
            <div className={classes.loginformpage }>
                <Loginform />
            </div>
        )
    }
}

export default Login;