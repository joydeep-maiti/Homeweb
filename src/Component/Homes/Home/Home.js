import React from 'react';
import classes from './Home.css';
import Stars from '../../Stars/Stars';


const home = (props) => {
    return (
        <div className={classes.tile}>
            <img src={props.imgsrc} alt="homeimage" className={classes.image} />
            <p className={classes.tilebadge}>{props.badge}</p>
            <p className={classes.tiletag}>{props.tag}</p>
            <p className={classes.tiledesc}>{props.desc}</p>
            <Stars />
            <span>{props.ratingtag}</span>
        </div>
    )
}

export default home;