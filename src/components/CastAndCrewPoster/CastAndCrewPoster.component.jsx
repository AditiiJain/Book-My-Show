import React from "react";
const CastPoster = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mb-2">
          <img src={props.image} alt="poster" className="w-full h-full rounded-full"/>
        </div>
        <h3 className="text-sm md:text-md lg:text-lg lg:font-medium text-center">{props.title}</h3>
        <p className="text-xs md:text-sm text-gray-600">as {props.role}</p>
      </div>
    </>
  );
};

export default CastPoster;
