import React from "react";
import "./style/footer.css";

const Footer = () => {
  return (
    <footer>
      <a className="footer__logo">
        <img src={require("../assets/codecollab.png")}></img>
      </a>
      <ul className="permalinks">
        <li className="footer__links">
          <a href="explore">Explore</a>
        </li>
        <li className="footer__links">
          <a href="about">About</a>
        </li>
        <li className="footer__links">
          <a href="profile">Profile</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; CodeCollab 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
