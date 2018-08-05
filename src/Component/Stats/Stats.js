import React from 'react';
import classes from './Stats.css';
import img1 from '../../assets/key.jpg';


const stats = () => {
    return (
        <div className={classes.tile}>
            <img className={classes.img} src={img1} alt="key" />
            <label className={classes.title} >Find out how much you could earn hosting your place
            <span className={classes.badge}>Turn your extra space into extra income</span>
                <button className={classes.btn}>Find out more</button></label>
        </div>
    )
}

export default stats;