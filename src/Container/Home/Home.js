import React, { Component } from "react";
import Welcomeimage from '../../Component/Welcomeimage/Welcomeimage';
import Features from '../../Component/Features/Features';
import classes from './Home.css';

class Home extends Component {
    render() {
        return(
            <div>
                <Welcomeimage />
                <div className={classes.mainbody}>
                    <Features />
                </div>
            </div>
        )
    }
}

export default Home;