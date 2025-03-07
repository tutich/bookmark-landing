import React, { useState } from "react";
import logoImg from "../../src/assets/images/logo-bookmark.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

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
          <div className="fixed inset-0 bg-blue-300/90 z-40"></div>
          <div className="fixed top-0 right-0 z-50 h-screen w-[90%] mx-auto flex flex-col items-center transition-all duration-300 ">
            <button
              className="absolute py-4 top-6 right-6"
              onClick={() => setIsOpen(false)}
            >
              <img src={close} alt="close" />
            </button>
            <ul className="py-8">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="uppercase text-white font-medium text-xl py-3"
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <button className="text-blue-50 flex items-center justify-center text-sm p-[14px] w-full h-[28px] border-solid border-4 rounded-md">
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
