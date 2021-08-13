import React, { useContext } from "react";

//context
import { MovieContext } from "../../context/movie.context";

//component
import MovieInfo from "./MovieInfo.component";

const MovieHero = () => {
  const {movie} = useContext(MovieContext)
  return (
 
     <>
      <div>
        <div className="relative md:hidden" style={{ height: "calc(170vw)" }}>
          {/* Mobile*/}
          <div className="absolute bottom-8 left-4 z-50">
              <MovieInfo/>
          </div>
          <div className="absolute bottom-0 bg-black opacity-95 z-30 w-full h-56" />
          <img
            className="w-full h-full"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
          />
      
        </div>
        <div
          className="relative hidden md:block w-full lg:hidden"
          style={{ height: "calc(85vw)" }}
        >
          {/* Tablet */}
          <div className="absolute bottom-10 z-50">
              <MovieInfo/>
          </div>
          <div className="absolute bottom-0 bg-black opacity-95 z-30 w-full h-56" />
          <img
            className="w-full h-full"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          {/* Large */}
          <div
            className="absolute z-10 h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />
          <div className="absolute z-30 lg:left-28 xl:left-40 top-12 flex items-center gap-10">
            <div className="w-64" style={{ height: "24rem" }}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="poster"
                className="w-full h-full rounded-xl "
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img
            className="w-full h-full  object-cover"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="poster"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
