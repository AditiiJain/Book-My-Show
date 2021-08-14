import React from "react";
const CastPoster = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mb-2">
          <img src={`https://image.tmdb.org/t/p/original${props.profile_path}`} alt="poster" className="w-full h-full rounded-full object-cover"/>
        </div>
        <h3 className="text-sm md:text-md lg:text-lg lg:font-medium text-center"> {props.original_title}</h3>
        <p className="text-xs md:text-sm text-gray-600 text-center">as {props.character}</p>
      </div>
    </>
  );
};

export default CastPoster;
