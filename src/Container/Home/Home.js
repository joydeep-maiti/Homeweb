import React, { Component } from "react";
import Welcomeimage from '../../Component/Welcomeimage/Welcomeimage';
import Features from '../../Component/Features/Features';
import Plus from '../../Component/Plus/Plus';
import classes from './Home.css';

class Home extends Component {
    render() {
        return(
            <div>
                <Welcomeimage />
                <div className={classes.mainbody}>
                    <p className={classes.sectiontitle}>Explore Airbnb</p>
                    <Features />
                    <p className={classes.sectiontitle}>Introducing Airbnb Plus</p>
                    <Plus />
                </div>
            </div>
        )
    }
}

export default Home;