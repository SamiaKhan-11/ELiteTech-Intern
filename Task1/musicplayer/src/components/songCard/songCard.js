import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";

export default function SongCard({ album }) {
  return (
    <div className="w-full h-[62%] bg-[#27354d] rounded-t-[30px] rounded-br-none flex flex-col justify-center items-center">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}
