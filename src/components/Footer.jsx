import React from "react";
import logo from "../../src/assets/images/logo-bookmark.svg";
import facebook from "../../src/assets/images/icon-facebook.svg";
import twitter from "../../src/assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="bg-blue-300 py-8">
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row mx-auto items-center justify-between">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-6">
          <div className="mb-4 lg:mb-0">
            <img src={logo} alt="logo" />
          </div>
          <div className=" text-white text-sm">
            <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <li className="tracking-wide uppercase">Features</li>
              <li className="tracking-wide uppercase">Pricing</li>
              <li className="tracking-wide uppercase">Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-10 lg:gap-12 mt-4 lg:mt-0">
          <img src={facebook} alt="fb" />
          <img src={twitter} alt="x" />
        </div>

      </div>
    </div>
  );
};

export default Footer;
