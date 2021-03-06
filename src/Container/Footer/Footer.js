import React, { Component } from 'react';
import classes from './Footer.css';
import Footeritem from '../../Component/Footeritem/Footeritem';
import fb from '../../assets/fb.png';
import twt from '../../assets/twt.svg';
import ins from '../../assets/ins.svg';



class Footer extends Component {
    state = {
        Airbnb: {
            title: "Airbnb",
            subitems: [
                {itemtitle:"Careers", link:"#"},
                {itemtitle:"Press", link:"#"},
                {itemtitle:"Policies", link:"#"},
                {itemtitle:"Help", link:"#"},
                {itemtitle:"Diversity and Belonging", link:"#"},
                {itemtitle:"Company Details", link:"#"},
            ]
        },
        Discover: {
            title: "Discover",
            subitems: [
                {itemtitle:"Trust & Safety", link:"#"},
                {itemtitle:"Travel Credit", link:"#"},
                {itemtitle:"Airbnb Citizen", link:"#"},
                {itemtitle:"Business Travel", link:"#"},
                {itemtitle:"Guidebooks", link:"#"},
                {itemtitle:"Airbnbmag", link:"#"},
                {itemtitle:"Events", link:"#"},
            ]
        },
        Hosting: {
            title: "Hosting",
            subitems: [
                {itemtitle:"Why Host", link:"#"},
                {itemtitle:"Hospitality", link:"#"},
                {itemtitle:"Responsible Hosting", link:"#"},
                {itemtitle:"Community Center", link:"#"}
            ]
        },
        social: {
            title: "",
            subitems: [
                {itemtitle:"Terms", link:"#"},
                {itemtitle:"Privacy", link:"#"},
                {itemtitle:"Sitemap", link:"#"}
            ]
        },
    }
    render() {
        return (
            <div className={classes.footer}>
                <div className={classes.footerbody}>
                    <Footeritem title={this.state.Airbnb.title} arr={this.state.Airbnb.subitems} />
                    <Footeritem title={this.state.Discover.title} arr={this.state.Discover.subitems} />
                    <Footeritem title={this.state.Hosting.title} arr={this.state.Hosting.subitems} />
                    <div className={classes.section}>
                        <div className={classes.iconbody}>
                            <img className={classes.icon} src={fb} alt="fb" />
                            <img className={classes.icon} src={twt} alt="twt" />
                            <img className={classes.icon} src={ins} alt="fb" />
                        </div>
                        <Footeritem title={this.state.social.title} arr={this.state.social.subitems} />
                    </div>
                </div>
                <hr className={classes.line}/>
                <div className={classes.lang}>
                    <label>English</label>
                    <label>GBP</label>
                </div>
            </div>

        )
    }
    
}

export default Footer;