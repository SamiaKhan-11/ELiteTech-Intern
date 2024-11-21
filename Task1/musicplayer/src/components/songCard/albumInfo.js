import React from "react";

export default function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className="mt-5 w-[80%]">
      <div className="w-full overflow-hidden text-lg font-bold text-[#c3d0e3]">
        <div className="whitespace-nowrap inline-block animate-marquee pl-full">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="text-sm font-medium text-[#9aa9c2] overflow-hidden text-ellipsis line-clamp-2">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="text-xs font-normal text-[#9aa9c2] mt-2.5">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}
