import React, { useContext } from "react";
import { BiChevronLeft, BiSearch, BiShareAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

//context
import { MovieContext } from "../../context/movie.context";

//component
import { Nav2Lg } from "./Navbar2.component";

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex justify-center items-center">
          <Link to="/">
            <div className="text-4xl font-thin">
              <BiChevronLeft className="text-white" />
            </div>
          </Link>
          <h3 className="text-white text-xl font-bold">
            {movie.original_title}
          </h3>
        </div>
        <div className="w-6 h-6 text-white">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-16 py-2 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-4">
          <Link to="/">
            <div className="w-12 h-12">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
              />
            </div>
          </Link>
          <div className="w-full flex bg-white items-center gap-2 px-3 py-1  rounded-sm">
            <BiSearch className="w-5 h-5 text-gray-500" />
            <input
              type="search"
              className="placeholder-gray-400 w-full bg-transparent focus:outline-none border-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <div className="flex items-center text-sm text-gray-300">
            Delhi <IoMdArrowDropdown className="text-white" />
          </div>
          <button className="bg-navbar-800 text-xs text-white rounded-md px-4 py-1">
            Sign in
          </button>
          <div className="w-8 h-8">
            <IoIosMenu className="text-white w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const NavXl = () => {
  return (
    <>
      <div className="container mx-auto px-32 py-2 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-4">
          <Link to="/">
            <div className="w-12 h-12">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
              />
            </div>
          </Link>
          <div className="w-full flex bg-white items-center gap-2 px-3 py-1  rounded-sm">
            <BiSearch className="w-5 h-5 text-gray-500" />
            <input
              type="search"
              className="placeholder-gray-400 w-full bg-transparent focus:outline-none border-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <div className="flex items-center text-sm text-gray-300">
            Delhi <IoMdArrowDropdown className="text-white" />
          </div>
          <button className="bg-navbar-800 text-xs text-white rounded-md px-4 py-1">
            Sign in
          </button>
          <div className="w-8 h-8">
            <IoIosMenu className="text-white w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="lg:bg-navbar-900 lg:relative overflow-x-hidden absolute inset-x-0 z-20 bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="md:hidden">
          {/*mobile screen*/}
          <NavSm />
          {/* <NavBar2SM/> */}
        </div>
        <div className="hidden md:block lg:hidden">
          {/*medium tablet screen*/}
          <NavSm />
        </div>
        <div className="hidden lg:flex lg:flex-col 2xl:hidden">
          {/*large screen*/}
          <NavLg />
          <Nav2Lg className="bg-gray-800" />
        </div>
        <div className="hidden 2xl:block">
          <NavXl />
          <Nav2Lg className="bg-gray-800" />
        </div>
      </nav>
    </>
  );
};
export default MovieNavbar;
