import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//configs
import TempImages from "../configs/TempImages.config";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-16 bg-navbar-600">
        <div>
          <div className="container mx-auto 2xl:px-36 pt-8">
            <PosterSlider
              images={TempImages}
              title="Recommended Movies"
              isDark={false}
            />
          </div>
        </div>

        <div className="container mx-auto 2xl:px-36">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
            alt="advertisement"
          />
        </div>

        <div className="md:container md:mx-auto px-3 md:px-0 lg:px-4 2xl:px-36">
          <h2 className="font-bold text-gray-800 md:text-2xl md:p-6 text-xl pt-4">
            The Best Of Entertainment{" "}
          </h2>
          <p className="text-gray-500 text-sm pb-4 md:hidden">
            Step out or stay in, interesting experiences for everyone.
          </p>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-navbar-700 py-10 ">
          <div className="container mx-auto px-4 2xl:px-36">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="premiere image"
                className="w-full h-full pb-8"
              />
            </div>
            <PosterSlider
              images={TempImages}
              title="Premieres"
              subtitle="Brand new releases every friday"
              isDark={true}
            />
          </div>
        </div>

        <div>
          <div className="container mx-auto 2xl:px-36">
            <PosterSlider
              images={TempImages}
              title="Online Streaming Events"
              isDark={false}
            />
          </div>
        </div>

        <div>
          <div className="container mx-auto 2xl:px-36">
            <PosterSlider
              images={TempImages}
              title="Outdoor Events"
              isDark={false}
            />
          </div>
        </div>

        <div>
          <div className="container mx-auto 2xl:px-36">
            <PosterSlider
              images={TempImages}
              title="Laughter Therapy"
              isDark={false}
            />
          </div>
        </div>

        <div>
          <div className="container mx-auto 2xl:px-36">
            <PosterSlider
              images={TempImages}
              title="Popular Events"
              isDark={false}
            />
          </div>
        </div>

        <div>
          <div className="container mx-auto 2xl:px-36">
            <PosterSlider
              images={TempImages}
              title="Top Games and Sports Events"
              isDark={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
