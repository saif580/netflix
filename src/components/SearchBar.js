import React, { useRef } from "react";
import lang from "../utils/languageContants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/contants";
import { addGptMoviesResult } from "../utils/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef();
  //search movie in TMDB database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Avatar, Terminator, Jurassic Park, Parasite, Spirited Away";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      console.log("Error");
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMoviesResult({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="flex justify-center rounded-lg">
      <form
        className="bg-black w-full md:w-3/4   grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 rounded-lg col-span-9"
          type="text"
          ref={searchText}
          placeholder={lang[language].searchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="text-xs md:text-lg col-span-3 m-4 py-2 px-4 rounded-lg bg-red-700 text-white"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
