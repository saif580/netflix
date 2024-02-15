import React from "react";
import { useMediaQuery } from "react-responsive";

const VideoTitle = ({ title, overview }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="w-full aspect-video relative bg-gradient-to-r from-black text-white z-10">
      <div className="absolute inset-0 flex px-14 flex-col w-full justify-center">
        <h1 className="font-bold sm:text-sm  md:text-xl lg:text-6xl lg:w-1/2 md:w-full">
          {title}
        </h1>
        {!isSmallScreen && (
          <p className="py-4  sm:text-xs md:text-lg  lg:text-xl lg:w-1/2 ">
            {overview}
          </p>
        )}
        <div className="flex mt-8">
          <button className="bg-white text-black mr-4 sm:p-1 md:p-2 lg:p-3 rounded-lg hover:bg-opacity-80 sm:text-xs md:text-lg ld:text-xl">
            Play
          </button>
          <button className="bg-gray-500 mx-2 text-white sm:p-1 md:p-2 lg:p-3  bg-opacity-50 rounded-lg sm:text-xs md:text-lg ld:text-xl">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
