import React from "react";

export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
         style={{
          ...props.style,
          top: "38%",
        }}
        onClick={props.onClick}
      />
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
          top: "38%",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

// props => className
//          inline styles
//          onClick
