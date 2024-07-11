import React from 'react';
import Slider from "react-slick";
import ReviewCard1 from './ReviewCard1';
import ReviewCard2 from './ReviewCard2';

const SimpleSlider = ()=> {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        width: 100,
        adaptiveHeight: true,

        appendDots: dots => (
            <div>
                <ul style={{
                    margin: "0px", padding: "0px"
                }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
           
    }

    return (
        <>
            <div className="full-width-carousel">
                <Slider {...settings}>
                    <div className="full-width-slide">
                        <ReviewCard1/>
                    </div>
                    <div className="full-width-slide">
                        <ReviewCard2/>
                    </div>
                    
                </Slider>
            </div>
        </>
    );
}

export default SimpleSlider
    