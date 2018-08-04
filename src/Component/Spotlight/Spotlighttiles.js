import React from 'react';
import classes from './Spotlighttiles.css';
import Spotlighttile from './Spotlighttile/Spotlighttile';
import img1 from '../../assets/wave.jpg'
import img2 from '../../assets/concert.jpg';
import img3 from '../../assets/social.jpg';

const spotlighttiles = () => {
    return (
        <div className={classes.tiles}>
            <Spotlighttile imgsrc={img1} badge="100+ SURFING EXPERIENCE"
                        tag="Catch a wave" 
                        desc="We have teamed up with the world surf league to offer sufing experiences all over the world."/>
            <Spotlighttile imgsrc={img2} badge="60+ CONCERTS"
                        tag="Introducing Airbnb Concerts "
                        desc="Discover a new way to experience live music with intimate shows in unique places."/>
            <Spotlighttile imgsrc={img3} badge="200+ EXPERIENCE"
                        tag="Social Impact Experiences" 
                        desc="Try something new while supporting a cause.100% of what you pay goes to non-profit."/>
        </div>
    )
}

export default spotlighttiles;