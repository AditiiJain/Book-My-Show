import React from "react";

const MovieInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-8">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-36 h-6">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premiere"
              className="w-full h-full"
            />
          </div>
          <span className="bg-navbar-900 p-1 px-2 text-white rounded-xl text-xs">
            Streaming Now
          </span>
        </div>
        <h1 className="text-white lg:text-5xl font-bold hidden lg:block md:px-4">
          Justice League
        </h1>
        <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5">
          <div className="text-white flex flex-col gap-3 md:px-4">
            <h4 className="text-gray-300">
              English &bull; Languages:{" "}
              <span className="text-navbar-800 font-semibold">
                Audio(1), Subtitles(1)
              </span>
            </h4>
            <h4>
              1h 49m &bull; Biography, Drama &bull; 13+ &bull; 24 Jul,2021
            </h4>
          </div>

          <div className="text-white flex items-center gap-3 lg:w-full md:w-screen md:px-4">
            <button className="w-full py-3 font-semibold rounded-lg bg-navbar-800">
              Rent ₹149
            </button>
            <button className="w-full py-3 font-semibold rounded-lg bg-navbar-800">
              Buy ₹149
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
