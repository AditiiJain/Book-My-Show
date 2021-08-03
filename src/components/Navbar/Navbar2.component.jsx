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
      <div className="flex bg-white">
        <div className="w-28 h-28">
          <img src={Img3} alt="" className="w-3/4 h-3/4" />
          <p>Movies</p>
        </div>
        <div className="w-28 h-28">
          <img src={Img6} alt="" />
          <p>Stream</p>
        </div>
        <div className="w-28 h-28">
          <img src={Img2} alt="" />
          <p>Events</p>
        </div>
        <div className="w-28 h-28">
          <img src={Img4} alt="" />
          <p>Plays</p>
        </div>
        <div className="w-28 h-28">
          <img src={Img5} alt="" />
          <p>Sports</p>
        </div>
        <div className="w-28 h-28">
          <img src={Img1} alt="" />
          <p>Activities</p>
        </div>
      </div>
    </>
  );
};
const Nav2Sm = () => {
  return (
    <>
      {/* <div className="flex flex-col">
        <div className="flex bg-white">
          <div className="w-28 h-28 p-6 flex flex-col items-center justify-center py-16 ">
            <img src={Img3} alt="" />
          </div>
          <div className="w-28 h-28 p-6 flex flex-col items-center justify-center py-16 ">
            <img src={Img6} alt="" />
          </div>
          <div className="w-28 h-28 p-6 flex flex-col items-center justify-center py-16 ">
            <img src={Img2} alt="" />
          </div>
          <div className="w-28 h-28 p-6 flex flex-col items-center justify-center py-16 ">
            <img src={Img4} alt="" />
          </div>
          <div className="w-28 h-28 p-6 flex flex-col items-center justify-center py-16 ">
            <img src={Img5} alt="" />
          </div>
          <div className="w-28 h-28 p-6 flex flex-col items-center justify-center py-16 ">
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className="flex bg-white">
          <div className="px-6">
            <p>Movies</p>
          </div>
          <div className="px-6">
            <p>Stream</p>
          </div>
          <div className="px-6">
            <p>Events</p>
          </div>
          <div className="px-6">
            <p>Plays</p>
          </div>
          <div className="px-6">
            <p>Sports</p>
          </div>
          <div className="px-6">
            <p>Activities</p>
          </div>
        </div>
      </div> */}
      <div className="flex bg-white justify-between">
        <div className="w-16 h-16 p-6 flex flex-col items-center justify-center md:w-20 md:h-20">
          <img src={Img3} alt="" />
          <p className="text-xs">Movies</p>
        </div>
        <div className="w-16 h-16 p-6 flex flex-col items-center justify-center">
          <img src={Img6} alt="" />
          <p className="text-xs ">Stream</p>
        </div>
        <div className="w-16 h-16 p-6 flex flex-col items-center justify-center">
          <img src={Img2} alt="" />
          <p className="text-xs">Events</p>
        </div>
        <div className="w-16 h-16 p-6 flex flex-col items-center justify-center">
          <img src={Img4} alt="" />
          <p className="text-xs">Plays</p>
        </div>
        <div className="w-16 h-16 p-6 flex flex-col items-center justify-center">
          <img src={Img5} alt="" />
          <p className="text-xs">Sports</p>
        </div>
        <div className="w-16 h-16 p-6 flex flex-col items-center justify-center">
          <img src={Img1} alt="" />
          <p className="text-xs">Activities</p>
        </div>
      </div>
    </>
  );
};

const Nav2Lg = () => {
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
// const Nav2Lg = () => {
//   return (
//     <>
//       <div className="container mx-auto px-32 py-2 font-normal flex items-center justify-between">
//         <div className="text-gray-300 text-sm">
//           <a href="#" className="px-3">
//             Movies
//           </a>
//           <a href="#" className="px-3">
//             Stream
//           </a>
//           <a href="#" className="px-3">
//             Events
//           </a>
//           <a href="#" className="px-3">
//             Plays
//           </a>
//           <a href="#" className="px-3">
//             Activities
//           </a>
//           <a href="#" className="px-3">
//             Buzz
//           </a>
//         </div>
//         <div className="text-white text-xs">
//           <a href="#" className="px-2">
//             ListYourShow
//           </a>
//           <a href="#" className="px-2">
//             Corporates
//           </a>
//           <a href="#" className="px-2">
//             Offers
//           </a>
//           <a href="#" className="px-2">
//             Gift Cards
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

const NavBar2 = () => {
  return (
    <>
      <nav className="bg-white lg:bg-gray-800 ">
        <div className="md:hidden overflow-x-scroll">
          {/*mobile screen*/}
          <Nav2Sm />
        </div>
        <div className="hidden md:flex lg:hidden overflow-x-scroll">
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
