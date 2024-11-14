import React from "react";
import { FlipWordsDemo } from "../Ui/FlipWords/FlipWordsDemo";
import { FiShoppingCart } from "react-icons/fi";
import Stats from "../Components/Stats";

export default function Home() {
  return (
    <div>
      <div className="px-10 mx-8 lg:mx-10 md:mx-8">
        <div className="container flex items-center justify-between h-full mx-auto bg-white/20 rounded-[40px] xl:h-[470px]">
          <div className=" flex flex-col justify-end gap-5 w-[20vw]  h-full ">
            <div className="flex justify-center w-full pb-5 rounded-xl pt-[150px]">
              <div className="flex justify-center w-full">
                <img src="/4.png" alt="" className=" h-[200px]"/>
              </div>
            </div>
            <div className="flex justify-center w-full pb-10">
              <button className="relative flex items-center justify-center rounded-lg w-[70%] h-11 px-2 py-3 text-2xl bg-white/80 text-black font-bold overflow-hidden group">
                <span className="absolute transition-transform duration-300 transform group-hover:translate-x-[160%]">
                  Shop Now
                </span>
                <FiShoppingCart
            className="absolute transition-transform duration-500 transform -translate-x-full opacity-0 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100"
            size={24}
          />
              </button>
            </div>
          </div>
          

          <div className="  w-[50vw]  h-full flex flex-col items-center ">
            <h2 className=" relative flex  gap-[50px]  font-bold font-lilita-one text-black/80  text-[230px] z-0 ">
              <h1>D</h1>
              <h1>O</h1>
              <h1>T</h1>
              <h1>S</h1>
            </h2>
            <img
              src="/1.png"
              alt=""
              className=" absolute h-[510px] top-[88px] z-10 items-center"
            />
            
          </div>
          <div className=" w-[20vw] h-full flex flex-col items-start justify-end">
            
            <div className="flex gap-2 pb-10">
              <FlipWordsDemo></FlipWordsDemo>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Stats></Stats>
      </div>
    </div>
  );
}
