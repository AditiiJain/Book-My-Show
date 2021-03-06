import React, { useContext, useState } from "react";

//components
import PaymentModal from "../PaymentModal/PaymentModal.component";

//context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
    setTitle("Rent");
    setDescription(
      "You can rent this movie for 30 days but will have 2 days to watch it once you start playback ( available for download ) "
    );
  };
  const buyMovies = () => {
    setIsOpen(true);
    setPrice(999);
    setTitle("Buy");
    setDescription(
      "Watch the movie any time after purchasing it (available for download)"
    );
  };

  // Naive approach
  // const genres = movie.genres && movie.genres.map(({name})=>name).join(", ")

  //optional chaining
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} title={title} description={description}/>
      <div className="flex flex-col pr-3 lg:px-0 gap-3 lg:gap-8">
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
          {movie.original_title}
        </h1>
        <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5">
          <div className="text-white flex flex-col gap-3 md:px-4">
            <h4 className="text-gray-300">
              {movie.original_language === "en"
                ? "English"
                : movie.original_language}{" "}
              &bull; Languages:
              <span className="text-navbar-800 font-semibold">
                Audio(1), Subtitles(1)
              </span>
            </h4>
            <h4>
              {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull;{" "}
              {movie.vote_count}+ &bull; {movie.release_date}
            </h4>
          </div>

          <div className="text-white flex items-center gap-3 lg:w-full md:w-screen md:px-4">
            <button
              className="w-full py-3 font-semibold rounded-lg bg-navbar-800"
              onClick={rentMovies}
            >
              Rent ???149
            </button>
            <button
              className="w-full py-3 font-semibold rounded-lg bg-navbar-800"
              onClick={buyMovies}
            >
              Buy ???999
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
