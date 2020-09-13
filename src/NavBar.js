import React from "react";
import icon from "./images/gt-icon.png";
import logo from "./images/gt-logo.png";
import { BiWorld } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { FiMoreHorizontal } from "react-icons/fi";
const NavBar = () => {
  return (
    <IconContext.Provider value={{ color: "purple" }}>
      <div className="navbar">
        <div className="header">
          <div className="logo">
            <img src={icon} alt="Logo" />
            <img src={logo} alt="Grant Thornton" />
          </div>
          <ul className="list">
            <li>
              <a href="https://www.grantthornton.co.uk/">Contact Us</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">
                <BiWorld />
              </a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">
                <BiSearch />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="https://www.grantthornton.co.uk/">Insights</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">Services</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">Industries</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">Meet our people</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">Careers</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">About Us</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">Locations</a>
            </li>
            <li>
              <a href="https://www.grantthornton.co.uk/">
                <FiMoreHorizontal />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
