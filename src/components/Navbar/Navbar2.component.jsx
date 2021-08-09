import React from "react";
import Img1 from "./images/activities.png";
import Img2 from "./images/events.png";
import Img3 from "./images/movies.png";
import Img4 from "./images/plays.png";
import Img5 from "./images/sports.png";
import Img6 from "./images/stream.png";

const Nav2Md = () => {
  return (
    <>
      <div className="flex bg-white justify-around">
        <div className="w-28 h-28 flex flex-col justify-center items-center">
          <img src={Img3} alt="" className="w-7/12 h-7/12" />
          <p>Movies</p>
        </div>
        <div className="w-28 h-28 flex flex-col justify-center items-center">
          <img src={Img6} alt="" className="w-7/12 h-7/12" />
          <p>Stream</p>
        </div>
        <div className="w-28 h-28 flex flex-col justify-center items-center">
          <img src={Img2} alt="" className="w-7/12 h-7/12" />
          <p>Events</p>
        </div>
        <div className="w-28 h-28 flex flex-col justify-center items-center">
          <img src={Img4} alt="" className="w-7/12 h-7/12" />
          <p>Plays</p>
        </div>
        <div className="w-28 h-28 flex flex-col justify-center items-center">
          <img src={Img5} alt="" className="w-7/12 h-7/12" />
          <p>Sports</p>
        </div>
        <div className="w-28 h-28 flex flex-col justify-center items-center">
          <img src={Img1} alt="" className="w-7/12 h-7/12" />
          <p>Activities</p>
        </div>
      </div>
    </>
  );
};
const Nav2Sm = () => {
  return (
    <>
      <div className="flex bg-white justify-around">
        <div className="w-20 h-20 p-6 flex flex-col items-center justify-center ">
          <img src={Img3} alt="" />
          <p className="text-xs">Movies</p>
        </div>
        <div className="w-20 h-20  p-6 flex flex-col items-center justify-center">
          <img src={Img6} alt="" />
          <p className="text-xs ">Stream</p>
        </div>
        <div className="w-20 h-20 p-6 flex flex-col items-center justify-center">
          <img src={Img2} alt="" />
          <p className="text-xs">Events</p>
        </div>
        <div className="w-20 h-20 p-6 flex flex-col items-center justify-center">
          <img src={Img4} alt="" />
          <p className="text-xs">Plays</p>
        </div>
        <div className="w-20 h-20 p-6 flex flex-col items-center justify-center">
          <img src={Img5} alt="" />
          <p className="text-xs">Sports</p>
        </div>
        <div className="w-20 h-20 p-6 flex flex-col items-center justify-center">
          <img src={Img1} alt="" />
          <p className="text-xs">Activities</p>
        </div>
      </div>
    </>
  );
};

export const Nav2Lg = () => {
  return (
    <>
      <div className="container mx-auto 2xl:px-32 py-2 font-normal flex items-center justify-between lg:px-16">
        <div className="text-gray-300 text-sm">
          <a href="#" className="px-3">
            Movies
          </a>
          <a href="#" className="px-3">
            Stream
          </a>
          <a href="#" className="px-3">
            Events
          </a>
          <a href="#" className="px-3">
            Plays
          </a>
          <a href="#" className="px-3">
            Activities
          </a>
          <a href="#" className="px-3">
            Buzz
          </a>
        </div>
        <div className="text-white text-xs">
          <a href="#" className="px-2">
            ListYourShow
          </a>
          <a href="#" className="px-2">
            Corporates
          </a>
          <a href="#" className="px-2">
            Offers
          </a>
          <a href="#" className="px-2">
            Gift Cards
          </a>
        </div>
      </div>
    </>
  );
};

 const NavBar2 = () => {
  return (
    <>
      <nav className="bg-white lg:bg-gray-800 overflow-x-auto">
        <div className="md:hidden ">
          {/*mobile screen*/}
          <Nav2Sm />
        </div>
        <div className="hidden md:block lg:hidden">
          {/*medium tablet screen*/}
          <Nav2Md />
        </div>
        <div className="hidden lg:flex">
          {/*large screen*/}
          <Nav2Lg />
        </div>
      </nav>
    </>
  );
};

export default NavBar2;
