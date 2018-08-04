import React from 'react';
import classes from './Optiontiles.css';
import Optiontile from './Optiontile/Optiontile';
import img1 from '../../assets/family.jpg';
import img2 from '../../assets/work.jpg';

const optiontiles = () => {
    return (
        <div className={classes.tiles}>
            <Optiontile imgsrc={img1} badge="2000+ HOMES" 
                        desc="Find a home that families love.Stretch out and enjoy a place of your own"/>
            <Optiontile imgsrc={img2} badge="2000+ HOMES" 
                        desc="Book a top rated home that offers reservation flexibility and and work-trip essential"/>
        </div>
    )
}

export default optiontiles;