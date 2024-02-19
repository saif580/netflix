import React from "react";
import { useMediaQuery } from "react-responsive";

const VideoTitle = ({ title, overview }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="w-full aspect-video relative bg-gradient-to-r from-black text-white z-10">
      <div className="absolute inset-0 flex px-14 flex-col w-full justify-center">
        <h1 className="font-bold text-sm  md:text-xl  lg:w-1/2 md:w-full">
          {title}
        </h1>
        {!isSmallScreen && (
          <p className="py-4  sm:text-xs md:text-lg  lg:w-1/2 ">
            {overview}
          </p>
        )}
        <div className="flex mt-8">
          <button className="bg-white text-black mr-2 md:mr-4 p-2 md:p-3 rounded-sm md:rounded-lg hover:bg-opacity-80 text-xs md:text-lg ">
            ▶️Play
          </button>
          <button className="bg-gray-500 mx-2 text-white p-2 md:p-3 bg-opacity-50 rounded-sm md:rounded-lg text-xs md:text-lg ">
            ℹ️More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
