import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="sm:-mt-15 md:-mt-30 lg:-mt-52 pl-8 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
