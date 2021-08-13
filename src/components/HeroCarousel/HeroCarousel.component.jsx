import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSlider from "react-slick";

//components
import { NextArrow, PrevArrow } from "./Arrows.components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  //all hooks should be on top
  const [images, setImages] = useState([]);

  //naive approach-->here if we make the main callback function as async function, it will break the flow of react app. This will leads to RACE CONDITION.
  // useEffect(async()=>{
  // const getImages=await axios.get("/movie/now_playing");
  // console.log(getImages);
  // },[])

  useEffect(() => {
    const requestNowPLayingImages = async () => {
      const getImages = await axios.get("/movie/now_playing");
      // console.log(getImages)
      setImages(getImages.data.results);
    };
    requestNowPLayingImages();
  }, []);

  const carouselImages = images.slice(0, 5);
  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "338px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // own custom arrows for carousel
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider className=" heroCarousel" {...settings}>
          {carouselImages.map((image) => {
            return (
              <div className="w-full h-56 md:h-72 sm:h-64 pb-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="carousel"
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider className=" heroCarousel" {...settingsLG}>
          {carouselImages.map((image) => {
            return (
              <div className="w-full h-96 px-2 py-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt=""
                  className="w-full h-full rounded-md"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
