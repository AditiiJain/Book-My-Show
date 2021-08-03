import React from "react";
const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-3">
        <div className="h-80">
          {/*we are not considering width as it will be adjust by react slick*/}
          <img
            className="wifull h-full rounded-xl"
            src={props.src}
            alt={props.title}
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};

export default Poster;
