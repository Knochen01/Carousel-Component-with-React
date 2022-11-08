import React from "react";
import './Card.css'

const Card = (props) => {
    return  (
        <>
        <div className="Card">
        <h4 className="Card-title">{props.caption}</h4>
        <img src={props.src} alt={props.caption} className="Card-image"></img>
        <small className="Card-small">Image{props.currNum} of {props.totalNum}</small>
        </div>
        </>
    ) 
}


export default Card;