import React from "react";

export default function AlbumImage({ url }) {
  return (
    <div className="relative flex w-[80%] items-center justify-center z-10">
      <img src={url} alt="album art" className="rounded-[30px] w-full aspect-square" />
      <div className="absolute top-5 w-[90%] -z-10 blur-lg">
        <img src={url} alt="shadow" className="rounded-[30px]" />
      </div>
    </div>
  );
}
