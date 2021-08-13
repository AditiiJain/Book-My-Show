import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//components
import MovieNavbar from "../components/Navbar/MovieNavbar.component";

//context
import { MovieContext } from "../context/movie.context";

const MovieLayout = (props) => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  useEffect(() => {
    const requestMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`); //id = parameter's id
      setMovie(getMovie.data);
    };
    requestMovie();
  },[id]);
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
