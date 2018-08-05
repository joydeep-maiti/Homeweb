import React from 'react';
import classes from './Welcomeimage.css';
import icon from '../../assets/search.png';

const Welcomeimage = () => {
    return (
        <div className={classes.slider}>
            <div className={classes.area}>
                <span className={classes.caption}>Book unique Event with one stop store and experience event memories.</span>
                <div className={classes.input}>
                    <input className={classes.inputfield} type="text"  placeholder="search wedding or Photographer in your city" />
                    <img src={icon} />
                </div>
                
            </div>
            <p className={classes.footerbtn}>footer</p>
        </div>
    );
}

export default Welcomeimage;