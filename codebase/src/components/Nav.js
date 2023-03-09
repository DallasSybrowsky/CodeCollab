import React from "react";
import "./style/nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className="nav__links" href="#">
          <img className="logo" src={require("../assets/codecollab.png")}></img>{" "}
          </a>
        </li>
        <li>
          <a className="nav__links" href="#collaborate">
            Collaborate{" "}
          </a>
          </li>
          <li>
          <a className="nav__links" href="#explore">
            Explore{" "}
          </a>
        </li>
        <li>
          <a className="nav__links" href="#chat">
            Chat{" "}
          </a>
        </li>
        <li>
        <a className="nav__links" href="#profile">
          Profile
        </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
