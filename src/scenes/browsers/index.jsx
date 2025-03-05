import React from "react";
import chromeImg from "../../assets/images/logo-chrome.svg";
import firefoxImg from "../../assets/images/logo-chrome.svg";
import operaImg from "../../assets/images/logo-chrome.svg";

import dotsImg from "../../assets/images/bg-dots.svg";

const Browsers = () => {
  return (
    <div>
      <div>
        <h1>Download the extension</h1>
        <p>
          {" "}
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div>
        <div>
          <img src={chromeImg} alt="logo-chrome" />
          <h2>Add to Chrome</h2>
          <p>Minimum version 62</p>
          <img src={dotsImg} alt="dots" />
          <button>Add & Install Extension</button>
        </div>

        <div>
          <img src={firefoxImg} alt="logo-firefox" />
          <h2>Add to Firefox</h2>
          <p>Minimum version 55</p>
          <img src={dotsImg} alt="dots" />
          <button>Add & Install Extension</button>
        </div>

        <div>
          <img src={operaImg} alt="logo-opera" />
          <h2>Add to Opera</h2>
          <p>Minimum version 46</p>
          <img src={dotsImg} alt="dots" />
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Browsers;
