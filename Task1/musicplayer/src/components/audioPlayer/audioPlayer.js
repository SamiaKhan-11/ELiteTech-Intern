import React, { useState, useRef, useEffect, useCallback } from "react";
import Controls from "./controls";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimatiom";

export default function AudioPlayer({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // Memoized handleNext and handlePrev functions
  const handleNext = useCallback(() => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  }, [currentIndex, total.length, setCurrentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  }, [currentIndex, total.length, setCurrentIndex]);

  // Memoized startTimer function
  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  }, [handleNext]);

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioSrc, startTimer]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex, audioSrc, startTimer]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  return (
    <div className="w-full h-[40%] my-[3%] flex">
      <div className="w-[37%]">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="w-[63%] flex flex-col justify-between items-center">
        <p className="text-center text-[58px] font-bold m-0 text-[#c4d0e3] overflow-hidden text-ellipsis line-clamp-2">
          {currentTrack?.name}
        </p>
        <p className="text-[#9aa9c2] text-[14px] font-medium">
          {artists.join(" | ")}
        </p>
        <div className="flex flex-col items-center w-full">
          <div className="w-1/2 flex justify-between mb-[20px] items-center">
            <p className="text-[20px] font-bold m-0 text-[#c4d0e3]">
              0:{addZero(Math.round(trackProgress))}
            </p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="text-[20px] font-bold m-0 text-[#c4d0e3]">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
