import React from 'react';
import classes from './Feature.css';


const feature = (props) => {
    return (
        <div className={classes.tile}>
            <img src={props.imgsrc} alt="homeimage" className={classes.image}/>
            <label className={classes.tiletitle}>{props.title}</label>
        </div>
    )
}

export default feature;