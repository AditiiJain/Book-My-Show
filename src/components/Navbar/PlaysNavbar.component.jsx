import React from "react";
import { BiSearch, BiChevronLeft } from "react-icons/bi";

//components
import { Nav2Lg } from "./Navbar2.component";
import { NavLg } from "./navbar.component";

const PlaysNavbar = () => {
  const NavSm = () => {
    return (
      <>
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex justify-center items-center">
            <div className="flex text-white justify-center items-center text-4xl font-thin">
              <BiChevronLeft />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold">Plays</h3>
              <span className="flex items-center text-xs text-gray-300">
                Delhi | 35 Events
              </span>
            </div>
          </div>
          <div className="w-6 h-6 text-white">
            <BiSearch className="w-full h-full" />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <nav className="bg-navbar-900">
        <div className="lg:hidden">
          <NavSm />
        </div>

        <div className="hidden lg:block">
          <NavLg />
          <Nav2Lg />
        </div>
      </nav>
    </>
  );
};

export default PlaysNavbar;
