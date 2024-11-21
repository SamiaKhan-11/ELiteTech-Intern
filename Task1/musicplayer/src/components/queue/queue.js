import React from "react";

export default function Queue({ tracks, setCurrentIndex }) {
  return (
    <div className="w-full h-[35%] rounded-[30px] rounded-tr-none bg-[#3e61d2] flex flex-col justify-center items-center bg-[repeating-radial-gradient(circle_at_0_0,transparent_0,#3e61d2_40px),repeating-linear-gradient(#4767d055,#4767d0)]">
      <div className="h-[85%] flex flex-col justify-between w-[80%]">
        <p className="text-[20px] font-bold text-white text-left my-[10px]">Up Next</p>
        <div className="h-[80%] w-full overflow-y-auto scrollbar-hide">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="flex justify-between w-full py-[5px] text-[14px] font-medium text-white cursor-pointer transition-transform duration-200 hover:scale-95"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="w-[75%] truncate">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
