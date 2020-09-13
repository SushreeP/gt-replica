import React from "react";
import { BiWorld } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
const NavBar = () => {
  return (
    <IconContext.Provider value={{ padding: 0 }}>
      <div className="navbar">
        <div className="header">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/gt-icon.png"} alt="Logo" />
            <img
              src={process.env.PUBLIC_URL + "/gt-logo.png"}
              alt="Grant Thornton"
            />
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
        <div className="nav"></div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
