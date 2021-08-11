import { Disclosure } from "@headlessui/react";
import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilters = (props) => {
  return (
    <div className="w-full bg-white mb-3 px-3 py-2 rounded-md">
      <Disclosure>
        {
          // destructure the open
          ({ open }) => {
            return (
              <>
                <Disclosure.Button className="py-2 flex justify-between w-full px-3 items-center">
                  <div className="flex items-center text-sm gap-2">
                    {open ? <BiChevronUp className="text-lg"/> : <BiChevronDown className="text-lg"/>}
                    <span className={open ? "text-red-600" : "text-gray-800"}>
                      {props.title}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs">Clear</p>
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 pt-4 pb-6 px-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    {props.tags.map((tag) => (
                      <>
                        <div className="text-sm rounded-sm border border-gray-300 px-2 py-1">
                          <span style={{color:"rgb(220, 53, 88)"}}>{tag}</span>
                        </div>
                      </>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            );
          }
        }
      </Disclosure>
    </div>
  );
};

export default PlaysFilters;
