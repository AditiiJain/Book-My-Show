import React from "react"
import Axios from "axios"

//HOC
import DefaultHOC from "./HOC/Default.HOC"
import MovieHOC from "./HOC/Movie.HOC";
import PlaysHOC from "./HOC/Plays.HOC"

//Pages
import HomePage from "./pages/Home.pages";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.pages";
import axios from "axios";

// axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params = {}; 
//these are default settings and initially params are not existed. Therefore, it will throw an error that params not exist. That's why we are initializing an empty object and assigning API_KEY as the property of that object
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage}/>
     <MovieHOC path="/movie/:id" exact component={MoviePage}/>
     <PlaysHOC path="/plays" exact component={PlaysPage}/>
    </>
  );
}

export default App;
