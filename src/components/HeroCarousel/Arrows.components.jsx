import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black", padding: "30px" }}
        onClick={props.onClick}
      >
        <BsChevronLeft />
      </div>
    </>
  );
};
export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgba(0,0,0,0.8 ",
          padding: "30px",
        }}
        onClick={props.onClick}
      >
          <BsChevronRight/>
      </div>
    </>
  );
};

// props => className
//          inline styles
//          onClick
