import React from 'react';
import classes from './Loginform.css';

const loginform = () => {
    return (
        <div className={classes.loginpage}>
            <div className={classes.form}>
                <form className={classes.loginform}>
                    <p className={classes.title}>LOGIN</p>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button className={classes.loginbutton}>login</button>
                    <p className={classes.message}>login with facebook or google</p>
                    <div className={classes.social}>
                        <button className={classes.fb}>facebook</button>
                        <button className={classes.goog}>google</button>
                    </div>
                    <p className={classes.message}>Not registered?Create an account</p>
                </form>
            </div>
        </div>
    )
}

export default loginform;