import React from "react";
import { BiChevronRight, BiSearch} from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import {IoIosMenu} from "react-icons/io"

const NavSm = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white text-xl font-bold">It All Starts Here!</h3>
          <span className="flex items-center text-xs text-gray-300">
            Delhi <BiChevronRight />
          </span>
        </div>
        <div className="w-6 h-6 text-white">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex bg-white items-center gap-2 px-3 py-1  rounded-sm">
      <BiSearch className="w-5 h-5 text-gray-500" />
      <input
        type="search"
        className="placeholder-gray-400 w-full bg-transparent focus:outline-none border-none"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-2/3 gap-4">
          <div className="w-12 h-12">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="llogo"
            />
          </div>
          <div className="w-full flex bg-white items-center gap-2 px-3 py-1  rounded-sm">
            <BiSearch className="w-5 h-5 text-gray-500" />
            <input
              type="search"
              className="placeholder-gray-400 w-full bg-transparent focus:outline-none border-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
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

const Navbar = () => {
  return (
    <>
      <nav className="bg-navbar-900 px-4 py-2">
        <div className="md:hidden">
          {/*mobile screen*/}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/*medium tablet screen*/}
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          {/*large screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
