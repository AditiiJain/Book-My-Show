import React from "react"

//HOC
import DefaultHOC from "./HOC/Default.HOC"
import MovieHOC from "./HOC/Movie.HOC";
import PlaysHOC from "./HOC/Plays.HOC"

//Pages
import HomePage from "./pages/Home.pages";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.pages";

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
