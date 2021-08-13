import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>  
    {/* doubt */}
      <div className="flex flex-col items-start gap-3 px-1 md:px-3">
        <div className="h-48 md:h-60 lg:h-80">
          {/*we are not considering width as it will be adjust by react slick*/}
          <img
            className="w-full h-full rounded-md md:rounded-xl"
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title}
          />
        </div>
        <div>
          <h3
            className={`text-sm font-semibold  md:text-md lg:text-lg md:font-semibold ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.original_title}
          </h3>
          <p
            className={`text-xs md:text-sm ${
              props.isDark
                ? "text-white text-xs lg:text-sm"
                : "text-gray-700 text-xs lg:text-lg"
            }`}
          >
            {props.original_language === "en" ? "English" : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Poster;
