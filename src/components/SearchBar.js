import React from "react";
import lang from "../utils/languageContants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  console.log(language);
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 rounded-lg col-span-9"
          type="text"
          placeholder={lang[language].searchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 rounded-lg bg-red-700 text-white">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
