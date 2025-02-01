import React from "react";

function Loader() {
  return (
    <div class="w-full h-full min-h-screen flex justify-center items-center">
      <div class="absolute animate-ping h-[16rem] w-[16rem] rounded-full  border-t-4 border-b-4 border-red-500"></div>
      <div class="absolute animate-spin h-[14rem] w-[14rem] rounded-full  border-t-4 border-b-4 border-purple-500 "></div>
      <div class="absolute animate-ping h-[12rem] w-[12rem] rounded-full  border-t-4 border-b-4 border-pink-500 "></div>
      <div class="absolute animate-spin h-[10rem] w-[10rem] rounded-full border-t-4 border-b-4 border-yellow-500"></div>
      <div class="absolute animate-ping h-[8rem] w-[8rem] rounded-full border-t-4 border-b-4 border-green-500"></div>
      <div class="absolute animate-spin h-[6rem] w-[6rem] rounded-full border-t-4 border-b-4 border-indigo-600"></div>
      <div class="rounded-full h-28 w-28 animate-bounce flex items-center justify-center text-gray-400 font-semibold text-xl dark:text-black">
        Loading...
      </div>
    </div>
  );
}

export default Loader;
