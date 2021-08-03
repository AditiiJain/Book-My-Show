import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage = () => {
  return (
    <>
      <div className="lg:container lg:mx-auto lg:px-4">
        <h2 className="font-bold text-gray-800 text-2xl p-6">
          The Best of Entertainment{" "}
        </h2>
        <EntertainmentCardSlider />
      </div>
    </>
  );
};

export default HomePage;
