import React from "react";
import "./style/footer.css";

const Footer = () => {
  return (
    <footer>
      <a className="footer__logo">
        <img src={require("../assets/codecollab.png")}></img>
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#collaborate">Collaborate</a>
        </li>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#chat">Chat</a>
        </li>
        <li>
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
