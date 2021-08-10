import React from "react";
import { FaCcAmazonPay } from "react-icons/fa";

//components
import MovieHero from "../components/MovieHero/MovieHero.component";

const MoviePage = () => {
  return (
    <>
      <div>
        <MovieHero />
      </div>
      <div className="my-12 container pl-4 lg:ml-28 xl:ml-36 lg:w-2/3 pr-4">
        <div className="flex flex-col gap-3 mr-4 ">
          <h1 className="font-bold text-2xl ">About the movie</h1>
          <p>
            After a tragic accident, Nobel laureate Marie Curie keeps working on
            radioactive elements which results in revolutionary discoveries that
            have dramatic consequences for the modern world.
          </p>
        </div>
        <div className="mt-7">
          <hr />
        </div>
        <div className="my-8">
          <h1 className="mb-3 font-bold text-2xl">Applicable Offers</h1>
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
      </div>
    </>
  );
};

export default MoviePage;
