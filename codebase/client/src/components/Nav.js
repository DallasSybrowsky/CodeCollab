import React from "react";
import "./style/nav.css";
import Auth from "../utils/auth.js";
import { Link } from "react-router-dom";

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="navbar">
      <div className="brand-title">
        <img
          className="logo"
          alt="codecollab logo"
          src={require("../assets/codecollab.png")}
        ></img>
      </div>
      <div>
        <ul className="nav__links">
          <li>
            <a href="explore">Explore</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            {Auth.loggedIn() ? (
              <>
                <li>
                  {" "}
                  <a href="profile">My Projects</a>
                </li>
                <li onClick={logout}>
                  <a href="/">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <a href="/">Login</a>
                </li>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
