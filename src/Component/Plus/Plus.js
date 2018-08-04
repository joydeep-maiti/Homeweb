import React from 'react';
import classes from './Plus.css';


const plus = () => {
    return (
        <div className={classes.plusarea}>
            <div className={classes.pluscaption}>
                <p>A new selection of home verified for quality</p>
                <p>and comfort</p>
                <button>Explore Airbnb Plus Homes</button>
            </div>
        </div>
    )
}

export default plus;