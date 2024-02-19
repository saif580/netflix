import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-0 md:px-4 ">
      <h1 className="text-xl py-2 md:text-3xl md:py-4 text-white">{title}</h1>
      {Array.isArray(movies) ? (
        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieList;
