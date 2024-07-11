import card from "./card_data";
import React from "react";
import Slider from "react-slick";


const Card = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (

        <div className="slider-container">
      <Slider {...settings}>
        {card.map ((c)=>(
            <img src={c.img} />
        ))}
      </Slider>
    </div>
  );
}

export default Card ;