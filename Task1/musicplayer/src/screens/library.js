import React, { useEffect, useState } from "react";
import APIkit from "./../spotify";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    APIkit.get("me/playlists").then(function (response) {
      setPlaylist(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="w-full h-[100%] bg-gray-800 rounded-3xl overflow-y-auto">
      <div className="w-[96%] h-[90%] p-[3%] flex flex-wrap p-[3%] space-x justify-between">
        {playlist?.map((playlist) => (
          <div className="relative w-[17%] h-[45%] rounded-3xl bg-[#1e2a3e] border border-gray-600 p-3 mb-12 bg-gradient-to-br from-[#283754] to-gray-700 transform hover:scale-105 ease-in-out duration-300 "
          key={playlist.id}
          onClick={() => playPlaylist(playlist.id)}>
            <img
            src={playlist.images[0].url}
            alt="Playlist-Art"
            className="w-full h-[70%] rounded-xl aspect-square"
            /> 
          <p className="text-white font-bold text-lg my-2 line-clamp-2">
          {playlist.name} 
          </p>
          <p className="font-normal text-[#c4d0e37c]">{playlist.tracks.total} Songs</p>
          <div className="absolute right-0 bottom-0 w-[100%] h-[32%] bg-gradient-to-br from-[#415375] to-transparent  rounded-b-3xl opacity-0 flex items-end justify-end p-3 transition-opacity duration-300 hover:opacity-100">
          <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
