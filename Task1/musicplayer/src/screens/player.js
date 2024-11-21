import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "./../spotify";
import Widgets from "../components/widgets/widgets";
import AudioPlayer from "../components/audioPlayer/audioPlayer";
import SongCard from "../components/songCard/songCard";
import Queue from "../components/queue/queue";


export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="w-full h-[100%] bg-gray-800 rounded-3xl overflow-y-auto"
    style={{
      backgroundColor: "#1E2A3E",
      opacity: 1,
      backgroundImage:
        "repeating-radial-gradient( circle at center left, transparent 0, #1E2A3E 70px ), repeating-linear-gradient( #23365655, #233656 )",
    }}>
    <div className="flex h-screen">
      <div className="w-[68%] mr-[2%]">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="w-[30%] flex flex-col justify-between p-5">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
    </div>
  );
}
