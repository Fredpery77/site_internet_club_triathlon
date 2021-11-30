import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Img01 from "../assets/Tri Orleans 2019 064.JPG"
import Img02 from "../assets/courseM-2209190130baule.JPG"
import Img03 from "../assets/troyes 2019 062.JPG"

function Slider() {
    
    const datas = [
        {
            id: 1,
            image: `${Img01}`,
            title: "En premier la Natation",
            text: `Pour un XS ce sera 400m de natation, pour un S c'est 750m, pour un M c'est 1,5Km, pour un le L c'est 3Km, un XL c'est 4Km et le XXL 3,8Km`,
        },
        {
            id: 2,
            image: `${Img02}`,
            title: "En deuxième le Vélo",
            text: `Pour un XS ce sera 10Km de vélo, pour un S c'est 20Km, pour un M c'est 40Km, pour un le L c'est 80Km, un XL c'est 120Km et le XXL 180Km`,
        },
        {
            id: 3,
            image: `${Img03}`,
            title: "Pour finir la Course à pied",
            text: `Pour un XS ce sera 2,5Km de Course à pied, pour un S c'est 5Km, pour un M c'est 10Km, pour un le L c'est 30Km, un XL c'est 30Km et le XXL 42,195Km`
        }
    ]
    return (
        <Carousel 
        autoPlay
        interval={9000}
        infiniteLoop
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}>

            {datas.map(slide => (
                <div key={slide.id}>
                    <img src={slide.image} alt="" />
                    <div className="overlay">
                        <h2 className="overlay_title">{slide.title}</h2>
                        <p className="overlay_text">{slide.text}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Slider