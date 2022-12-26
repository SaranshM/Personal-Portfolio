import React, { useState, useEffect } from "react";
import "./Contact.css";
import Logo from "../Logo/Logo";
import ProjectsData from "../../Content/ProjectsData";
import Github from "../../images/github.png";
import Link from "../../images/link.png";
import Button from "../../UI/Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="contact__wrap" data-aos="fade-up">
      <div className="contact-header">
        <hr className="contact-line first" />
        <span className="contact-header-1">4.</span>&nbsp;&nbsp;&nbsp;
        <span className="contact-header-2">Contact</span>
        <hr className="contact-line" />
      </div>
      <h1 className="contact-content-1">Get In Touch</h1>
      <h1 className="contact-content-2">
        My inbox is open for new opportunities and I'll be sure to get back to
        you!
      </h1>
      <a href="mailto:saransh.canada.2022@gmail.com">
        <Button
          width={
            window.innerWidth > 550
              ? "15%"
              : window.innerWidth > 375
              ? "30%"
              : "40%"
          }
          padding={
            window.innerWidth > 550
              ? "1%"
              : window.innerWidth > 375
              ? "3%"
              : "4.5%"
          }
          fontSize={
            window.innerWidth > 550
              ? "1.2vw"
              : window.innerWidth > 375
              ? "2vw"
              : "3vw"
          }
        >
          Say Hello
        </Button>
      </a>
    </div>
  );
};

export default Contact;
