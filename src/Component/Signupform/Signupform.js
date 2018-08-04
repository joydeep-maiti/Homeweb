import React from 'react';
import classes from './Signupform.css';

const signupform = () => {
    return (
        <div className={classes.form}>
            <div className={classes.formsignup}>
                <form>
                    <lable>Full Name</lable>
                        <input type="text" placeholder="Your full name" />
                    <lable>Email</lable>
                        <input type="email" placeholder="Your e-mail" />
                    <lable>Username</lable>
                        <input type="text" placeholder="Your username" />
                    <lable>Password</lable>
                        <input type="password"placeholder="Your password" />
                    <lable>Retype Password</lable>
                        <input type="password"placeholder="Your password" />
                    <p class="terms">
                        <input type="checkbox" /> I agree all statments in terms of service
                    </p>
                    <div className={classes.last}>
                        <input type="submit" className={classes.formbtn} value="Sign Up" />
                        <h4 className={classes.linedlink}>Signin -></h4>
                    </div>

                </form>
            </div>                   
        </div>
    )
}

export default signupform;