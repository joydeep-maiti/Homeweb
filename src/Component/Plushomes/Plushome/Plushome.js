import React from 'react';
import classes from './Plushome.css';


const plushome = (props) => {
    return (
        <div className={classes.tile}>
            <img src={props.imgsrc} alt="homeimage" className={classes.image} />
            <p className={classes.tilebadge}>{props.badge}</p>
            <p className={classes.tiledesc}>{props.desc}</p>
        </div>
    )
}

export default plushome;