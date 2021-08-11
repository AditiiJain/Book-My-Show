import React from "react";

//component
import PlaysNavbar from "../components/Navbar/PlaysNavbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const PlaysLayout = (props) => {
  return (
    <>
       <PlaysNavbar/>
       <div className="p-4 pb-0 lg:p-0">
       <HeroCarousel/>
       </div>
      {props.children}
    </>
  );
};

export default PlaysLayout;
