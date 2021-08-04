import React from "react"

//HOC
import DefaultHOC from "./HOC/Default.HOC"
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.pages";
import MoviePage from "./pages/Movie.page";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage}/>
     <MovieHOC path="/movie/:id" exact component={MoviePage}/>
    </>
  );
}

export default App;
