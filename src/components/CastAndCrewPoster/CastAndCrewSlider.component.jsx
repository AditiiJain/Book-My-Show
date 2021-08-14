import React from "react";
import Slider from "react-slick";

//components
import CastPoster from "./CastAndCrewPoster.component";
import { NextArrow, PrevArrow } from "./ArrowsCast.component";
import "./Arrows.css";

const CastAndCrewSlider = (props) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          infinite:true,
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide:0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          infinite:true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const castAndCrewimages = props.images.reverse();
  return (
   
    <>
      <Slider className="CastAndCrew" {...settings}>
        {
        props.images.map((img) => {
          return <CastPoster {...img} />;
        })}
      </Slider>
    </>
  );
};

export default CastAndCrewSlider;
