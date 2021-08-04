import React from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";

//components
import Poster from "../Poster/Poster.component";

//configs
import PosterCarouselSettings from "../../configs/PosterCarousel.component";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col items-start pl-4 pb-3">
          <h3
            className={`text-2xl font-bold ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.title}
          </h3>
          <p
            className={`text-sm ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.subtitle}
          </p>
        </div>
        <div className="flex justify-center items-center text-navbar-800 text-sm pr-3">
          <p>See All</p>
          <BiChevronRight />
        </div>
      </div>
      <Slider {...PosterCarouselSettings}>
        {props.images.map((img) => {
          return <Poster {...img} isDark={props.isDark} />;
        })}
      </Slider>
    </>
  );
};

export default PosterSlider;
