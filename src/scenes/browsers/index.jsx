import React from "react";
import chromeImg from "../../assets/images/logo-chrome.svg";
import firefoxImg from "../../assets/images/logo-firefox.svg";
import operaImg from "../../assets/images/logo-opera.svg";

import dotsImg from "../../assets/images/bg-dots.svg";

const Browsers = () => {
  return (
    <div className="mx-auto py-6">
      <div className="py-4">
        <h1 className="text-blue-300 lg: text-xl lg:text-2xl font-bold text-center mb-4">Download the extension</h1>
        <p className="text-blue-100 w-[90%] lg:w-full text-sm text-center mx-auto mb-3">
          {" "}
          We’ve got more browsers in the pipeline. Please do let us know if <span className="hidden lg:inline"><br /></span>
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-[90%] lg:w-[70%] items-center justify-between  mx-auto ">

        <div className="grid grid-cols-1 w-[250px] items-center justify-center text-center shadow-md rounded-lg py-4 bg-white mb-12 lg:mb-36">
          <img src={chromeImg} alt="logo-chrome"  className="mb-3 mx-auto text-center"/>
          <h2 className="text-blue-300 font-medium">Add to Chrome</h2>
          <p className="text-blue-100 font-normal text-[12px] mb-4">Minimum version 62</p>
          <img src={dotsImg} alt="dots" className="mt-3 mb-3"/>
          <button className="bg-blue-200 text-white text-sm w-[90%] p-2 flex items-center justify-center rounded-md mx-auto ">Add & Install Extension</button>
        </div>

        <div className="grid grid-cols-1 w-[250px] items-center justify-center text-center shadow-md rounded-lg py-4 bg-white mb-12 lg:mb-24">
          <img src={firefoxImg} alt="logo-firefox" className="mb-3 mx-auto text-center"/>
          <h2 className="text-blue-300 font-medium">Add to Firefox</h2>
          <p className="text-blue-100 font-normal text-[12px] mb-4">Minimum version 55</p>
          <img src={dotsImg} alt="dots" className="mt-3 mb-3" />
          <button className="bg-blue-200 text-white text-sm w-[90%] p-2 flex items-center justify-center rounded-md mx-auto ">Add & Install Extension</button>
        </div>

        <div className="grid grid-cols-1 w-[250px] items-center justify-center text-center shadow-lg rounded-lg py-4 bg-white mb-12 lg:mb-12">
          <img src={operaImg} alt="logo-opera" className="mb-3 mx-auto text-center"/>
          <h2 className="text-blue-300 font-medium">Add to Opera</h2>
          <p className="text-blue-100 font-normal text-[12px] mb-4">Minimum version 46</p>
          <img src={dotsImg} alt="dots" className="mt-3 mb-3"/>
          <button className="bg-blue-200 text-white text-sm w-[90%] p-2 flex items-center justify-center rounded-md mx-auto ">Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Browsers;
