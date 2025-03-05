import React from 'react'
import logo from "../../src/assets/images/logo-bookmark.svg";
import facebook from "../../src/assets/images/icon-facebook.svg";
import twitter from "../../src/assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div>
      <div>
        <div><img src={logo} alt="logo" /></div>

        <div>
        <ul>
          <li>
            Features
          </li>
          <li>
            Features
          </li>
          <li>
            Features
          </li>
        </ul>
      </div>
      </div>
      
      <div>
        <img src={facebook} alt="fb" />
        <img src={twitter} alt="x" />
      </div>
    </div>
  )
}

export default Footer