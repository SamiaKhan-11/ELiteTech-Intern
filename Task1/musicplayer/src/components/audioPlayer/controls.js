import React from "react";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="flex w-1/2 items-center justify-between">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={handlePrev}
        >
          <IoPlaySkipBack />
        </div>
        <div
          className={`flex items-center justify-center w-16 h-16 rounded-full cursor-pointer transition-transform duration-200 ${
            isPlaying
              ? "bg-[#C96850] shadow-inner shadow-[#ff8769] hover:scale-110"
              : "bg-[#C96850] shadow-inner shadow-[#ffae9a] hover:scale-110"
          }`}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={handleNext}
        >
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}
