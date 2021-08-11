import React from "react";
import { Route } from "react-router-dom";
//layout
import PlaysLayout from "../layouts/Plays.layout";

const PlaysHOC = ({ component: Component, ...rest }) => {
  // const Component = component; naive approach
  return (
    <>
      <Route
        {...rest}
        component={(props)=> (
          <PlaysLayout>
            <Component  {...props}/>
          </PlaysLayout>
        )}
      />
    </>
  );
};

export default PlaysHOC;
