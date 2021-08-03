import React from "react";


export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgba(0,0,0,0.8) ",
          padding: "30px",
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
          backgroundColor: "rgba(0,0,0,0.8) ",
          padding: "30px",
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
