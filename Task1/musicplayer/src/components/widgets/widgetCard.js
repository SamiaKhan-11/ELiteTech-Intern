import React from "react";
import WidgetEntry from "./widgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

export default function WidgetCard({ title, similar, featured, newRelease }) {
  console.log(
    "similar",
    similar,
    "featured",
    featured,
    "newRelease",
    newRelease
  );

  return (
    <div className="relative w-[24%] h-[74%] rounded-[30px] bg-gradient-to-r from-[#283a58] to-transparent p-4 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-105">
      <p className="text-[18px] font-extrabold text-[#c4d0e3]">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              key={artist.id}
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              key={playlist.id}
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              key={album.id}
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
      <div className="absolute right-0 bottom-0 w-[84%] h-[34%] rounded-[30px] bg-gradient-to-t from-[#364562] to-transparent opacity-0 transition-opacity duration-500 ease-in-out flex items-end justify-end p-4 hover:opacity-100">
        <div className="text-[#c4d0e3]">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
