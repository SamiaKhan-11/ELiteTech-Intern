import React from "react";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="flex items-center w-full mt-4">
      <img
        src={image}
        alt={title}
        className="h-12 w-12 rounded-lg mr-3"
      />
      <div className="flex flex-col justify-center">
        <p className="font-bold text-[16px] text-[#c9d0e3] mb-1">{title}</p>
        <p className="font-normal text-[12px] text-[#c4d0e37c]">{subtitle}</p>
      </div>
    </div>
  );
}
