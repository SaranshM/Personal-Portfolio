import React, { useState } from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import ProjectsData from "../../Content/ProjectsData";
import Link from "../../images/link.png";
import Button from "../../UI/Button/Button";
import Github from "../../images/github.png";
import Instagram from "../../images/insta.png";
import Linkedin from "../../images/linkedin.png";
import Gmail from "../../images/gmail.png";

const Footer = () => {
  return (
    <div className="footer__wrap">
      <div className="footer-icons">
        <a
          href="https://github.com/SaranshM"
          className="footer-icon"
          target="_blank"
        >
          <img src={Github} />
        </a>
        <a
          href="https://www.instagram.com/__saranshmehta__/"
          className="footer-icon"
          target="_blank"
        >
          <img src={Instagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/saransh-mehta-0802/"
          className="footer-icon"
          target="_blank"
        >
          <img src={Linkedin} />
        </a>
        <a
          href="mailto:saransh.canada.2022@gmail.com"
          className="footer-icon"
          target="_blank"
        >
          <img src={Gmail} />
        </a>
      </div>
      <a href="https://github.com/SaranshM/Personal-Portfolio" target="_blank">
        <p className="footer-content-1">
          Designed &#38; Built by Saransh Mehta
        </p>
      </a>
    </div>
  );
};

export default Footer;
