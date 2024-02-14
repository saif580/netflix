import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 relative bg-gradient-to-r from-black text-white z-10">
      <div className="absolute inset-0 flex px-14 flex-col w-1/2 justify-center">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">{title}</h1>
        <p className="py-2 md:py-6 text-sm md:text-lg lg:w-1/2">{overview}</p>
        <div className="flex mt-8">
          <button className="bg-white text-black mr-4 text-xl p-4 px-12  rounded-lg hover:bg-opacity-80">
            Play
          </button>
          <button className="bg-gray-500 mx-2 text-white text-xl p-4 px-12 bg-opacity-50 rounded-lg">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
