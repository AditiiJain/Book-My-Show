import React from "react";
import Slider from "react-slick";

//components
import CastPoster from "./CastAndCrewPoster.component";
import { NextArrow, PrevArrow } from "./ArrowsCast.component";
import "./Arrows.css";

const CastAndCrewSlider = () => {
  const settings = {
    arrows: true,
    infinite: false,
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
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite:true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode:true,
          centerPadding:"15px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const temp = [
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
    {
      image:
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      role: "English",
    },
  ];
  return (
    <>
      <Slider className="CastAndCrew" {...settings}>
        {temp.map((img) => {
          return <CastPoster {...img} />;
        })}
      </Slider>
    </>
  );
};

export default CastAndCrewSlider;
