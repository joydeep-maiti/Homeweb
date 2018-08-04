import React from 'react';
import classes from './Features.css';
import Feature from './Feature/Feature';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';

const features = () => {
    return(
        <div className={classes.tiles}>
            <Feature imgsrc={img1} title="Homes"/>
            <Feature imgsrc={img2} title="Experiences"/>
            <Feature imgsrc={img1} title="Restaurants"/>
        </div>
    )
}

export default features;