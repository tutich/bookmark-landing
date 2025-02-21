import React from "react";
import Img from "../../assets/images/illustration-hero.svg";

const Intro = () => {
  return (
    <>
      <div className=" container mx-auto justify-center py-6 px-6 lg:flex ">
        {/* Features Pricing Contact Login */}
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-blue-300">
            A Simple Bookmark Manager
          </h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div>
            <button className="bg-blue-200 text-white">Get it on Chrome</button>
            <button className="bg-blue-100 text-blue-300">Get it on Firefox</button>
          </div>
        </div>

        <div className="w-1/2 relative">
          <div className="absolute bg-blue-200 w-[100%] h-80 bottom-[-20px] -right-48 rounded-bl-[160px]"></div>

          <div className="relative z-10">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
