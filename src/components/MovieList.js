import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="sm:px-2 md:px-4 lg:px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
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
