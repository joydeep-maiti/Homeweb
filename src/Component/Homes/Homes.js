import React from 'react';
import classes from './Homes.css';
import Home from './Home/Home';
import img1 from '../../assets/homes1.jpg'
import img2 from '../../assets/homes2.jpg';
import img3 from '../../assets/homes3.jpg';
import img4 from '../../assets/homes4.jpg';
import img5 from '../../assets/homes5.jpg';
import img6 from '../../assets/homes6.jpg';
import img7 from '../../assets/homes7.jpg';
import img8 from '../../assets/homes8.jpg';


const homes = () => {
    return (
        <div className={classes.tiles}>
            <Home imgsrc={img1} 
                        badge="ENTIRE HOUSE.CISTERNINO,BRINDISI"
                        tag="Trullo dell 1800 in Valle d'Itaria" 
                        desc=" €86 per night. Free cancellation‎"
                        ratingtag="205.Superhost"/>
            <Home imgsrc={img2} 
                        badge="ENTIRE HOUSE.PENAFIEL"
                        tag="Douro Villa with swimming pool,Penafiel,Portugal"
                        desc=" €262 per night. Free cancellation‎"
                        ratingtag="73.Superhost"/>
            <Home imgsrc={img3} 
                        badge="TREEHOUSE.ATLANTA"
                        tag="Secluded Intown Treehouse" 
                        desc=" €280 per night. Free cancellation‎"
                        ratingtag="293.Superhost"/>
            <Home imgsrc={img4} 
                        badge="ENTIRE LOFT.MEXICO CITY"
                        tag="Apartmeny 1of 4 with green terrace in Roma Norte" 
                        desc=" €61 per night. Free cancellation‎"
                        ratingtag="302.Superhost"/>
            <Home imgsrc={img5} 
                        badge="CAVE.CHANIA"
                        tag="Luxurious stone villa in Crete" 
                        desc=" €83 per night. Free cancellation‎"
                        ratingtag="111.Superhost"/>
            <Home imgsrc={img6} 
                        badge="CAVE.SANTORINI"
                        tag="Hector Cave House"
                        desc=" €520 per night. Free cancellation‎"
                        ratingtag="197.Superhost"/>
            <Home imgsrc={img7} 
                        badge="ENTIREFLAT.MINSK"
                        tag="Minsk Belarus Studio in historical center" 
                        desc=" €28 per night. Free cancellation‎."
                        ratingtag="254.Superhost"/>
            <Home imgsrc={img8} 
                        badge="PLUS VERIFIED.BARCELONA"
                        tag="Explore Old Barcelona from a Loft-Style Studio" 
                        desc=" €154 per night. Free cancellation‎"
                        ratingtag="243"/>
            <p className={classes.explore}>Show all (2000+) ></p>
        </div>
    )
}

export default homes;