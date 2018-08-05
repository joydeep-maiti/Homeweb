import React from 'react';
import classes from './Features.css';
import Feature from './Feature/Feature';
import img1 from '../../assets/home3.jpg';
import img2 from '../../assets/experience.jpg';
import img3 from '../../assets/res.jpeg';

const features = () => {
    return(
        <div className={classes.tiles}>
            <Feature imgsrc={img1} title="Homes"/>
            <Feature imgsrc={img2} title="Experiences"/>
            <Feature imgsrc={img3} title="Restaurants"/>
        </div>
    )
}

export default features;