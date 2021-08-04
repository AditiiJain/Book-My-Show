import React from "react";


export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgba(0,0,0,0.6) ",
          padding: "24px",
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
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
          backgroundColor: "rgba(0,0,0,0.6) ",
          padding: "24px",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
        onClick={props.onClick}
      />
    </>
  );
};

// props => className
//          inline styles
//          onClick
