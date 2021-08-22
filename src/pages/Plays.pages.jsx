import React, { useEffect, useState } from "react";
import axios from "axios";

//components
import PlaysPoster from "../components/Poster/PlaysPoster.component";
import PlaysFilters from "../components/PlaysFilters/PlaysFilters.component";

const PlaysPage = () => {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const requestPlays = async () => {
      const getPlays = await axios.get("/tv/airing_today");
      setPlays(getPlays.data.results);
    };
    requestPlays();
  }, []);

  return (
    <>
      <div className="lg:bg-navbar-600">
        <div className="lg:container lg:mx-auto px-4 xl:container xl:mx-auto 2xl:px-28 overflow-x-hidden ">
          <div className="w-full lg:flex lg:flex-row-reverse gap-7">
            <div className="lg:w-3/4">
              <h2 className="hidden lg:block text-2xl mt-16 font-bold text-gray-800">
                Plays in Delhi
              </h2>
              <div className="mt-2 mb-6 flex flex-wrap">
                <span
                  className="border border-gray-400 p-2 rounded-3xl text-xs mr-4 lg:bg-white mt-3"
                  style={{ color: "#dc3558" }}
                >
                  Today
                </span>
                <span
                  className="border border-gray-400 p-2 rounded-3xl text-xs mr-4 lg:bg-white mt-3"
                  style={{ color: "#dc3558" }}
                >
                  Tomorrow
                </span>
                <span
                  className="border border-gray-400 p-2 rounded-3xl text-xs mr-4 lg:bg-white mt-3"
                  style={{ color: "#dc3558" }}
                >
                  This Weekend
                </span>
                <span
                  className="border border-gray-400 p-2 rounded-3xl text-xs mr-4 lg:bg-white mt-3"
                  style={{ color: "#dc3558" }}
                >
                  Theatre
                </span>
              </div>
              <div className="flex flex-wrap ">
                <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                  {plays.map((play) => {
                    return (
                      <PlaysPoster
                        src={`https://image.tmdb.org/t/p/original${play.poster_path}`}
                        title={`${play.original_name}`}
                        venue="Book in Zoom"
                        language="English/Telugu"
                        money="₹149"
                        className="w-full"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/4">
              <h2 className="hidden lg:block text-2xl mt-16 font-bold text-gray-800 mb-5">
                Filters
              </h2>
              <PlaysFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilters
                title="Language"
                tags={["Hindi", "English", "Kannad"]}
              />
              <PlaysFilters
                title="Categories"
                tags={["Theatre", "Storytelling"]}
              />
              <PlaysFilters
                title="Genres"
                tags={["Drama", "Comedy", "Historical", "Adaption"]}
              />
              <PlaysFilters
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed", "Outdoor Events"]}
              />
              <PlaysFilters
                title="Price"
                tags={["Free", "0-500", "Above 2000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaysPage;
