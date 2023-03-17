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
          {/* <li>
            <a href="collaborate">
            Collaborate
            </a>
          </li> */}
          <li>
            <a href="explore">Explore</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          {/* <li>
            <a href="chat">
            Chat
            </a>
          </li> */}
          <li>
            {/* {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )} */}
            {Auth.loggedIn() ? (
              <>
                <li>
                  {" "}
                  <a href="me">{Auth.getProfile().data.username}'s profile</a>
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
