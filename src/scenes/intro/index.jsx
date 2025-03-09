import React from "react";
import Img from "../../assets/images/illustration-hero.svg";

const Intro = () => {
  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto items-center text-center lg:text-left flex flex-col-reverse lg:justify-between justify-center py-6 lg:flex-row">
        <div className="space-y-6 py-6">
          <h1 className="text-2xl lg:text-3xl font-semibold text-blue-300">
            A Simple Bookmark{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Manager
          </h1>
          <p className="text-sm text-blue-100">
            A clean and simple interface to organize your favourite{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            websites. Open a new browser tab and see your sites load{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            instantly. Try it for free.
          </p>

          <div className="items-center justify-center mx-auto lg:mx-0 lg:justify-start w-[90%] lg:w-[70%] flex gap-6">
            <button className="bg-blue-200 text-white p-2 text-[12px] w-[50%] font-medium shadow-md rounded-md">
              Get it on Chrome
            </button>
            <button className="bg-gray-100 shadow-lg p-2 text-[12px] w-[50%]  font-medium rounded-md text-blue-300">
              Get it on Firefox
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Background Shape */}
          <div className="absolute bg-blue-200 w-full h-40 lg:h-80 bottom-[-20px] -right-20 lg:-right-48 lg:w-[100%] rounded-bl-[160px]"></div>

          {/* Image */}
          <div className="relative z-10 w-[90%] max-w-[90%] lg:w-auto">
            <img src={Img} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
