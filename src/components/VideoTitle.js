import React from "react";
import { useMediaQuery } from "react-responsive";

const VideoTitle = ({ title, overview }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="w-full aspect-video pt-[20%] px-24 relative bg-gradient-to-r from-black text-white z-10">
      <div className="absolute inset-0 flex px-14 flex-col w-1/2 justify-center">
        <h1 className="font-bold sm:text-sm  md:text-xl lg:text-6xl">
          {title}
        </h1>
        {!isSmallScreen && (
          <p className="py-4  sm:text-xs md:text-lg  lg:text-xl lg:w-1/2 ">
            {overview}
          </p>
        )}
        <div className="flex mt-8">
          <button className="bg-white text-black mr-4 p-4 px-12 rounded-lg hover:bg-opacity-80 sm:text-xs md:text-lg ld:text-xl">
            Play
          </button>
          <button className="bg-gray-500 mx-2 text-white p-4 px-12 bg-opacity-50 rounded-lg sm:text-xs md:text-lg ld:text-xl">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
