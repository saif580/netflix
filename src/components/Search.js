import React from "react";
import SearchBar from "./SearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/contants";

const Search = () => {
  return (
    <div>
      <div className="fixed w-full h-full -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background-pic"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="pt-[30%] pb-[40%] md:p-[15%] lg:p-[10%]">
        <SearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default Search;
