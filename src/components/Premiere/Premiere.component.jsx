import React from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";

//components
import Poster from "../Poster/Poster.component";

const Premiere = () => {
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const premiereImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-ansmvxvkql-portrait.jpg",
      title: "GodZilla vs. Kong",
      subtitle: "English",
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col items-start pl-4 pb-3">
          <h3 className="font-bold text-2xl text-white">Premieres</h3>
          <p className="text-sm text-white">Brand new releases every friday</p>
        </div>
        <div className="flex justify-center items-center text-navbar-800 text-sm pr-3">
          <p>See All</p>
          <BiChevronRight />
        </div>
      </div>
      <Slider {...settings}>
        {premiereImages.map((img) => {
          return <Poster {...img} isDark />;
        })}
      </Slider>
    </>
  );
};

export default Premiere;
