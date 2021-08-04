import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
// import {Nav2Lg} from "../components/Navbar/Navbar2.component"

const MovieLayout = (props) => {
  return (
    <>
      <Navbar />
      {/* <Nav2Lg/> */}
      {props.children}
    </>
  );
};

export default MovieLayout;
