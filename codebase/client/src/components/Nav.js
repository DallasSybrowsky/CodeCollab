import React from "react";
import "./style/nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="brand-title">
        <img className="logo" src={require("../assets/codecollab.png")}></img>
      </div>
      <div>
        <ul className="nav__links">          
          {/* <li>
            <a href="collaborate">
              Collaborate
            </a>
          </li> */}
          <li>
            <a href="explore">
              Explore
            </a>
          </li>
          <li>
            <a href="about">
              About
            </a>
          </li>
          {/* <li>
            <a href="chat">
              Chat
            </a>
          </li> */}
          <li>
            <a href="profile">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
