import React from 'react';
import classes from './Footeritem.css';

const footeritem = (props) => {
    return (
        <div className={classes.footeritem}>
            <p className={classes.title}>{props.title}</p>
            {props.arr.map( key => {
                return <p className={classes.subitems}><a href={key.link} className={classes.subitem}>{key.itemtitle}</a></p>
            })}
        </div>
    )
}

export default footeritem;