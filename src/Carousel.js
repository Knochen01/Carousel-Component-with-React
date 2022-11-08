import React from 'react';
import Card from './Card';
import Carouseldata from './Database';
import { useState } from "react";
import "./Carousel.css";

const Carousel = (props) => {
    const total = Carouseldata.cartData.length;
    const [cardIdx, setCardIdx] = useState(0);
    const goFoward = () => {setCardIdx(cardIdx + 1)};
    const goBackward = () => {setCardIdx(cardIdx - 1)};
    const hideLeft = cardIdx === 0 ? "Carousel-hidden" : "";
    const hideRight = cardIdx === total - 1 ? "Carousel-hidden" : "";

    const data = Carouseldata.cartData[cardIdx];
    return (
        <>
        <h1 className="Carousel-title">{props.title}</h1>
        <div className='Carousel-main'>
        <i 
           className={`Carousel-left ${hideLeft}`}
           onClick={goBackward}
           data-testid="left-arrow">
        go back
        </i>
        <Card 
            caption={data.caption}
            src={data.src}
            currNum={cardIdx + 1}
            totalNum ={total}
        />
         <i 
            className={`Carousel-right ${hideRight}`}
            onClick={goFoward}
            data-testid="right-arrow">
        Next one
        </i>
        </div>
        </>
    )
}
export default Carousel;