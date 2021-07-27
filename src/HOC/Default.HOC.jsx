import React from "react"
import {Route} from "react-router-dom"
//layout
import DefaultLayout from "../layouts/Default.layout";

const DeafultHOC = ({component:Component,...rest}) => {
    // const Component = component; naive approach
    return (
        <>
        <Route {...rest} component={(props)=(
            <DefaultLayout>
                <Component {...props}/>
            </DefaultLayout>
        )}/></>
      );
}
 
export default DeafultHOC;