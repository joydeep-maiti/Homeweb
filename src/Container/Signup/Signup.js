import React, { Component } from "react";
import classes from './Signup.css';
import Signupform from '../../Component/Signupform/Signupform';

class Signup extends Component {
    render() {
        return (
            <div className={classes.signuppage}>
                <div className={classes.image}></div>
                <Signupform />
            </div>
        )
    }
}

export default Signup;