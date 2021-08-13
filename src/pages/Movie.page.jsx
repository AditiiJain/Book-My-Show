import React, { useContext, useEffect, useState } from "react";
import { FaCcAmazonPay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

//components
import MovieHero from "../components/MovieHero/MovieHero.component";
import CastAndCrewSlider from "../components/CastAndCrewPoster/CastAndCrewSlider.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//configs
import TempImages from "../configs/TempImages.config";

//context
import { MovieContext } from "../context/movie.context";

const MoviePage = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCastData = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCastData();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <MovieHero />
      </div>
      <div className="my-12 container pl-4 lg:ml-28 xl:ml-36 lg:w-2/3 pr-4">
        <div className="flex flex-col gap-3 mr-4 ">
          <h1 className="text-lg md:text-2xl font-bold  ">About the movie</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="mt-7">
          <hr />
        </div>
        <div className="my-8">
          <h1 className="mb-3 font-bold text-lg md:text-2xl">
            Applicable Offers
          </h1>
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div className="flex items-start gap-4 bg-navbar-500 border-2 border-yellow-300 border-dashed rounded-xl py-2 px-4">
              <div className="w-8 h-8">
                <FaCcAmazonPay className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-gray-800 text-lg font-semibold">
                  Amazon Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-navbar-500 border-2 border-yellow-300 border-dashed rounded-xl py-2 px-4">
              <div className="w-8 h-8">
                <FaCcAmazonPay className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-gray-800 text-lg font-semibold">
                  Amazon Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <hr />
        </div>
        <div className="my-8">
          <h1 className="mb-3 font-bold text-lg md:text-2xl">
            Cast &#38; Crew
          </h1>
          <CastAndCrewSlider images={cast} />
        </div>
        <div className="mt-7">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies}
            title="You might also like"
            isDark={false}
          />
        </div>
        <div className="mt-7">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={recommendedMovies}
            title="BMS XCLUSIVE"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
