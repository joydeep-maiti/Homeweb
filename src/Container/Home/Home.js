import React, { Component } from "react";
import Welcomeimage from '../../Component/Welcomeimage/Welcomeimage';
import Features from '../../Component/Features/Features';
import Plus from '../../Component/Plus/Plus';
import Optiontiles from '../../Component/Optiontiles/Optiontiles';
import Spotlighttiles from '../../Component/Spotlight/Spotlighttiles';
import Plushomes from '../../Component/Plushomes/Plushomes';
import Stats from '../../Component/Stats/Stats'; 
import Homes from '../../Component/Homes/Homes';
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
                    <p className={classes.sectiontitle}>Homes for your kind of trip
                    <span>Find a top rated home with amenities you need</span></p>
                    <Optiontiles />
                    <p className={classes.sectiontitle}>Homes around the world</p>
                    <Homes />
                    <p className={classes.sectiontitle}>Experiences in the spotlight</p>
                    <Spotlighttiles />
                    <p className={classes.sectiontitle}>Airbnb plus homes around the world
                    <span>Browse a new selection of homes verified for quality & comfort</span></p>
                    <Plushomes />
                    <hr className={classes.line}/>
                    <Stats />
                    <hr className={classes.line} />
                    <hr className={classes.fullline} />
                </div>
            </div>
        )
    }
}

export default Home;