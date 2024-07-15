"use client";
import React from "react";
import Slider from "react-slick";

const Carousel = ({ logos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider className="w-4/5 mx-auto" {...settings}>
      {logos.map((logo, index) => (
        <div key={index}>
          <img src={logo.src} alt={logo.alt} className="mx-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
