import React from 'react';
import classes from './Welcomeimage.css';

const Welcomeimage = () => {
    return (
        <div className={classes.slider}>
            <div className={classes.area}>
                <span className={classes.caption}>Book unique Event with one</span>
                <span className={classes.caption}>stop store and experience event memories .</span>
                <input type="text" className={classes.inputfield} placeholder="search wedding or Photographer in your city"/>
            </div>
            <p className={classes.footerbtn}>footer</p>
        </div>
    );
}

export default Welcomeimage;