import React from "react";

//components
import PlaysPoster from "../components/Poster/PlaysPoster.component";

const PlaysPage = () => {
  return (
    <>
      <div className="lg:container lg:mx-auto px-4 overflow-x-hidden">
        <div className="w-full">
          <div>
            <h2 className="hidden lg:block">Plays in Delhi</h2>
            <div className="mt-5 mb-7 lg:hidden">
              <span className="border border-gray-400 p-2 rounded-3xl text-xs mr-4" style={{color:"#dc3558"}}>Today</span>
              <span className="border border-gray-400 p-2 rounded-3xl text-xs mr-4" style={{color:"#dc3558"}}>Tomorrow</span>
              <span className="border border-gray-400 p-2 rounded-3xl text-xs mr-4" style={{color:"#dc3558"}}>This Weekend</span>
              <span className="border border-gray-400 p-2 rounded-3xl text-xs mr-4" style={{color:"#dc3558"}}>Theatre</span>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/2">
                <PlaysPoster src="https://in.bmscdn.com/discovery-catalog/events/tr:…15,oy-15,ow-55/et00313464-azyxnpqxnd-portrait.jpg" title="Digital Theatre" venue="Book in Zoom" language="English/Telugu" money="₹149" className="w-full"/>
                </div>
                <div className="w-1/2">
                <PlaysPoster src="https://in.bmscdn.com/discovery-catalog/events/tr:…15,oy-15,ow-55/et00313464-azyxnpqxnd-portrait.jpg" title="Digital Theatre" venue="Book in Zoom" language="English/Telugu" money="₹149" className="w-full"/>
                </div>
                <div className="w-1/2">
                <PlaysPoster src="https://in.bmscdn.com/discovery-catalog/events/tr:…15,oy-15,ow-55/et00313464-azyxnpqxnd-portrait.jpg" title="Digital Theatre" venue="Book in Zoom" language="English/Telugu" money="₹149" className="w-full"/>
                </div>
                <div className="w-1/2">
                <PlaysPoster src="https://in.bmscdn.com/discovery-catalog/events/tr:…15,oy-15,ow-55/et00313464-azyxnpqxnd-portrait.jpg" title="Digital Theatre" venue="Book in Zoom" language="English/Telugu" money="₹149" className="w-full"/>
                </div>
               
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PlaysPage;
