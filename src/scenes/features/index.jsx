import React, { useState } from "react";

const Features = () => {
  const [openTab, setOpenTab] = useState("1");

  const handleClick = (id) => {
    setOpenTab(id);
  };

  const feature = [
    {
      id: 1,
      image: "/assets/images/illustration-features-tab-1.svg",
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },

    {
      id: 2,
      image: "/assets/images/illustration-features-tab-2.svg",
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },

    {
      id: 3,
      image: "/assets/images/illustration-features-tab-3.svg",
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  return (
    <div>
      <div>
        <h1> Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div>
        <section>
          <button onClick={() => handleClick(1)}>Simple Bookmarking</button>
          <button onClick={() => handleClick(2)}>Speedy Searching</button>
          <button onClick={() => handleClick(3)}>Easy Sharing</button>
        </section>

        <section>
          {feature.map((item) => 
              openTab === item.id &&
              (
              <div key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <button>More Info</button>
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
