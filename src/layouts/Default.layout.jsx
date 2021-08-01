import React from "react"

//Components
import Navbar from "../components/Navbar/navbar.component";
import NavBar2 from "../components/Navbar/Navbar2.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
    return (  
        <>
        <Navbar/>
        <NavBar2/>
        <HeroCarousel/>
        {props.children}
        </>
    );
}
  
export default DefaultLayout;