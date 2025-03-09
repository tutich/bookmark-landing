import React, { useState } from "react";
import img1 from "../../../src/assets/images/illustration-features-tab-1.svg";
import img2 from "../../../src/assets/images/illustration-features-tab-2.svg";
import img3 from "../../../src/assets/images/illustration-features-tab-3.svg";

const Features = () => {
  const [openTab, setOpenTab] = useState(1);

  const handleClick = (id) => {
    setOpenTab(id);
  };

  const feature = [
    {
      id: 1,
      image: img1,
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },

    {
      id: 2,
      image: img2,
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },

    {
      id: 3,
      image: img3,
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  return (
    <div className="py-6">
      <div className="py-4">
        <h1 className="text-blue-300 text-xl lg:text-2xl font-bold text-center mb-4">
          {" "}
          Features
        </h1>
        <p className="text-blue-100 w-[90%] lg:w-full text-sm text-center mx-auto mb-3">
          Our aim is to make it quick and easy for you to access your{" "}
          <span className="hidden lg:inline">
            <br />
          </span>{" "}
          favourite websites. Your bookmarks sync between your devices{" "}
          <span className="hidden lg:inline">
            <br />
          </span>{" "}
          so you can access them on the go.
        </p>
      </div>

      <div>
        <section className="mx-auto flex flex-col lg:flex-row items-center justify-between py-2 w-[90%] lg:w-[35%]">
          <div className="flex flex-col lg:hidden items-center w-full">
            <hr className="w-full" />
            <button
              onClick={() => handleClick(1)}
              className={`py-3 relative ${
                openTab === 1 ? "text-blue-300" : "text-blue-100"
              }`}
            >
              Simple Bookmarking
              {openTab === 1 && (
                <span className="absolute -bottom-[1px] left-1/2 transform -translate-x-1/2 w-[90%] h-[4px] bg-red-500"></span>
              )}
            </button>
            <hr className="w-full" />
            <button
              onClick={() => handleClick(2)}
              className={`py-3 relative ${
                openTab === 2 ? "text-blue-300" : "text-blue-100"
              }`}
            >
              Speedy Searching
              {openTab === 2 && (
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-full h-[4px] bg-red-500"></span>
              )}
            </button>
            <hr className="w-full" />
            <button
              onClick={() => handleClick(3)}
              className={`py-3 relative ${
                openTab === 3 ? "text-blue-300" : "text-blue-100"
              }`}
            >
              Easy Sharing
              {openTab === 3 && (
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-full h-[4px] bg-red-500"></span>
              )}
            </button>
            <hr className="w-full" />
          </div>

          <div className="hidden lg:flex flex-col w-full items-center space-y-4">
            <div className="flex items-center gap-10">
              <button
                onClick={() => handleClick(1)}
                className={` relative ${
                  openTab === 1 ? "text-blue-300" : "text-blue-100"
                }`}
              >
                Simple Bookmarking
                {openTab === 1 && (
                  <span className="absolute -bottom-[16px] left-1/2 transform -translate-x-1/2 w-full h-[4px] bg-red-500"></span>
                )}
              </button>
              <button
                onClick={() => handleClick(2)}
                className={` relative ${
                  openTab === 2 ? "text-blue-300" : "text-blue-100"
                }`}
              >
                Speedy Searching
                {openTab === 2 && (
                  <span className="absolute -bottom-[16px] left-1/2 transform -translate-x-1/2 w-full h-[4px] bg-red-500"></span>
                )}
              </button>
              <button
                onClick={() => handleClick(3)}
                className={` relative ${
                  openTab === 3 ? "text-blue-300" : "text-blue-100"
                }`}
              >
                Easy Sharing
                {openTab === 3 && (
                  <span className="absolute -bottom-[16px] left-1/2 transform -translate-x-1/2 w-full h-[4px] bg-red-500"></span>
                )}
              </button>
            </div>
            <hr className="w-full" />
          </div>
        </section>

        <section>
          {feature.map(
            (item) =>
              openTab === item.id && (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center w-[90%] lg:w-[80%] justify-between mx-auto py-4 lg:py-8"
                >
                  <div className="">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className=" flex flex-col text-center lg:text-left space-y-6 w-[90%] mt-8 lg:mt-0 lg:w-[32%] mr-0 lg:mr-24">
                    <h2 className="text-xl lg:text-2xl text-blue-300 font-medium">
                      {item.title}
                    </h2>
                    <p className="text-sm text-blue-100 tracking-wider">
                      {item.text}
                    </p>
                    <button className="bg-blue-200 w-[30%] hidden lg:block p-2 text-white text-sm rounded-md">
                      More Info
                    </button>
                  </div>
                </div>
              )
          )}
        </section>
      </div>
    </div>
  );
};

export default Features;
