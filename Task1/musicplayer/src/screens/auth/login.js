import React from "react";
import { loginEndpoint } from "../../spotify";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-blue-200">
        <div className="w-[100vw] h-[100vh] bg-black p-2 item-center content-center">
          <div className="h-[16em] w-[18em] mx-auto border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] ">
            <div>
              <h1 className="text-[2em] font-medium -mt-3 mb-1">Welcome to Musify</h1>
              <p className="text-[0.85em]">
               Listen to your favorite music on Musify. </p>
              <p className="text-[0.85em] mb-2">Inspired by Spotify.</p>
            </div>
            <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
              <a href={loginEndpoint}>Login</a>
              <svg
                className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                stroke="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
