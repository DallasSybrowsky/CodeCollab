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
          <a href="#home">Home</a>
        </li>
        <li className="footer__links">
          <a href="#collaborate">Collaborate</a>
        </li>
        <li className="footer__links">
          <a href="#explore">Explore</a>
        </li>
        <li className="footer__links">
          <a href="#chat">Chat</a>
        </li>
        <li className="footer__links">
          <a href="#Profile">Profile</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; CodeCollab 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
