import React from 'react';
import classes from './Stars.css';


const stars = (props) => {
    return (
        <fieldset className={classes.rating}>
            <label className={classes.full} for="star5" title="Awesome - 5 stars"></label>
            {/* <label className={classes.half} for="star4half" title="Pretty good - 4.5 stars"></label> */}
            <label className={classes.full} for="star4" title="Pretty good - 4 stars"></label>
            {/* <label className={classes.half} for="star3half" title="Meh - 3.5 stars"></label> */}
            <label className={classes.full} for="star3" title="Meh - 3 stars"></label>
            {/* <label className={classes.half} for="star2half" title="Kinda bad - 2.5 stars"></label> */}
            <label className={classes.full} for="star2" title="Kinda bad - 2 stars"></label>
            {/* <label className={classes.half} for="star1half" title="Meh - 1.5 stars"></label> */}
            <label className={classes.full} for="star1" title="Sucks big time - 1 star"></label>
            {/* <label className={classes.half} for="starhalf" title="Sucks big time - 0.5 stars"></label> */}
        </fieldset>
    )
}

export default stars;