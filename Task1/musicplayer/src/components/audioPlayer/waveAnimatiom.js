import React from "react";

export default function WaveAnimation({ isPlaying }) {
  const waveClass = isPlaying ? "animate" : "";

  return (
    <div className="flex justify-between h-[54px] w-[calc((theme(spacing.boxSize)+theme(spacing.gutter))*13)]">
      <div className={`h-full w-boxSize bg-gradient-to-br from-boxGradientStart to-boxGradientEnd rounded-box ${waveClass} animate-quiet`}></div>
      <div className={`h-full w-boxSize bg-gradient-to-br from-boxGradientStart to-boxGradientEnd rounded-box ${waveClass} animate-normal`}></div>
      <div className={`h-full w-boxSize bg-gradient-to-br from-boxGradientStart to-boxGradientEnd rounded-box ${waveClass} animate-quiet`}></div>
      <div className={`h-full w-boxSize bg-gradient-to-br from-boxGradientStart to-boxGradientEnd rounded-box ${waveClass} animate-loud`}></div>
      <div className={`h-full w-boxSize bg-gradient-to-br from-boxGradientStart to-boxGradientEnd rounded-box ${waveClass} animate-quiet`}></div>
      <div className={`h-full w-boxSize bg-gradient-to-br from-boxGradientStart to-boxGradientEnd rounded-box ${waveClass} animate-normal`}></div>
      <div className={`h-full w-boxSize bg-gradient-to-br from-boxGradientStart to-boxGradientEnd rounded-box ${waveClass} animate-quiet`}></div>
    </div>
  );
}
