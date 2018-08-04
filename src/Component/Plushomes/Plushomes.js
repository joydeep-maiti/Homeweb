import React from 'react';
import classes from './Plushomes.css';
import Plushome from './Plushome/Plushome';
import img1 from '../../assets/home1.jpg'
import img2 from '../../assets/home2.jpg';
import img3 from '../../assets/home3.jpg';

const plushomes = () => {
    return (
        <div className={classes.tiles}>
            <Plushome imgsrc={img1} badge="80+ VERIFIED HOMES"
                        desc="Lake view and iconic towers--yours to behold from homes verified from quality and comfort."/>
            <Plushome imgsrc={img2} badge="40+ VERIFIED HOMES"
                        desc="Fierce fashion rich risotto--yours to behold from homes verified from quality and comfort.."/>
            <Plushome imgsrc={img3} badge="90+ VERIFIED HOMES"
                        desc="Boots,blues and BBQ--yours to behold from homes verified from quality and comfort.."/>
        </div>
    )
}

export default plushomes;