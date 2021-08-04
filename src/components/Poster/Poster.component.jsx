import React from "react";
const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-48 md:h-60 lg:h-80">
          {/*we are not considering width as it will be adjust by react slick*/}
          <img
            className="w-full h-full rounded-xl"
            src={props.src}
            alt={props.title}
          />
        </div>
        <h3
          className={`text-sm font-semibold  md:text-md lg:text-lg md:font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-xs md:text-sm ${
            props.isDark ? "text-white text-xs lg:text-sm" : "text-gray-700 text-xs lg:text-lg"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};

export default Poster;
