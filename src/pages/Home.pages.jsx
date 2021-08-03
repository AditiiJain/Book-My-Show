import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-0 lg:px-4">
        <h2 className="font-bold text-gray-800 md:text-2xl md:p-6 text-xl pt-4">
          The Best Of Entertainment{" "}
        </h2>
        <p className="text-gray-500 text-sm pb-4 md:hidden">Step out or stay in, interesting experiences for everyone.</p>
        <EntertainmentCardSlider />
      </div>
    </>
  );
};

export default HomePage;
