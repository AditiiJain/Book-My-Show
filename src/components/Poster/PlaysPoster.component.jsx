import React from "react";

const PlaysPoster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start px-1 md:px-3 mb-8">
        <div className="h-68 w-full md:h-68 lg:h-72">
          <img
            className="w-full h-full rounded-md md:rounded-xl"
            src={props.src}
            alt={props.title}
          />
        </div>
        <h3 className="font-medium mt-1">{props.title}</h3>
        <p className="text-xs text-gray-700">{props.venue}</p>
        <p className="text-xs text-gray-700">{props.language}</p>
        <p className="text-xs text-gray-700">{props.money}</p>
      </div>
    </>
  );
};

export default PlaysPoster;
