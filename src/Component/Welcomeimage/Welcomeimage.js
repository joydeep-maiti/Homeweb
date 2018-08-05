import React from 'react';
import classes from './Welcomeimage.css';
import icon from '../../assets/search.png';

const Welcomeimage = () => {
    return (
        <div className={classes.slider} id="change">
            <div className={classes.area}>
                <span className={classes.caption}>Book unique Event with one stop store and experience event memories.</span>
                <div className={classes.input}>
                    <input className={classes.inputfield} type="text"  placeholder="search wedding or Photographer in your city" />
                    <img src={icon} alt="search icon"/>
                </div>
                
            </div>
            <p className={classes.footerbtn}>Terms,Privacy,Currency & More</p>
        </div>
    );
}

export default Welcomeimage;