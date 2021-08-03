import React from "react";
import HeroSlider from "react-slick";
import {NextArrow,PrevArrow} from "./Arrows.components";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroCarousel.css"


const HeroCarousel = () => {
  const settingsLG = {
    arrows: true,
    autoplay:true,
    centerMode: true,
    centerPadding: "370px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // own custom arrows for carousel
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };
  const images = [
    "https://images.unsplash.com/photo-1627366285897-f040e8432f0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1627307770076-fc575f0a9dc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1627465952353-89bca14c390e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=819&q=80",
  ];
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full h-56 md:h-72 sm:h-64 pb-3">
                <img src={image} alt="" className="w-full h-full" />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => {
            return (
              <div className="w-full h-96 px-2 py-3">             
                <img src={image} alt="" className="w-full h-full rounded-md" />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
