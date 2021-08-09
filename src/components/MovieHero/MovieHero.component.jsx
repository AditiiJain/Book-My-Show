import React from "react";

//component
import MovieInfo from "./MovieInfo.component";

const MovieHero = () => {
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
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
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
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
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
                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/radioactive-et00302293-01-07-2021-11-05-20.jpg"
                alt="poster"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img
            className="w-full h-full"
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
            alt="poster"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
