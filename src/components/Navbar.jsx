import React, { useState } from "react";
import logoImg from "../../src/assets/images/logo-bookmark.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

const navItems = [
  {
    id: 1,
    title: "Features",
  },

  {
    id: 2,
    title: "Pricing",
  },

  {
    id: 3,
    title: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto ">
      <div className="py-8 flex justify-between items-center">
        <div>
          <img src={logoImg} alt="logo" />
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-12 pr-16">
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <button className="bg-softRed text-blue-50 flex items-center justify-center text-sm p-[6px] w-[74px] h-[28px] rounded-md">
              Login
            </button>
          </ul>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <img src={close} alt="close" />
            ) : (
              <img src={hamburger} alt="ham" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-blue-300/90 backdrop-blur-sm z-40"></div>

          <div className="fixed top-4 z-50 left-1/2 -translate-x-1/2 h-screen w-[90%] max-w-md flex flex-col items-center text-center transition-all duration-300 ">
            <div className="flex items-center justify-between px-2 py-4 w-full">
              <img src={logoImg} alt="logo" className="" />
              <button className="" onClick={() => setIsOpen(false)}>
                <img src={close} alt="close" />
              </button>
            </div>

            <ul className="flex flex-col mt-6 py-6 w-full items-center list-none">
              {navItems.map((item) => (
                <div className="w-full">
                  <hr className="w-full border-gray-500" />
                  <li
                    key={item.id}
                    className="uppercase text-white font-normal text-xl py-6 flex justify-center"
                  >
                    {item.title}
                  </li>
                </div>
              ))}

              <hr className="w-full border-gray-500 mb-6" />
              <button className="text-blue-50 text-lg flex items-center font-normal justify-center p-2 w-[100%] h-[38px] border-solid border-4 rounded-md">
                Login
              </button>

            </ul>

            <div className="flex items-center gap-6 py-8 mt-36">
              <img src={facebook} alt="fb" />
              <img src={twitter} alt="x" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
