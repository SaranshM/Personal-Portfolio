import React, { useState, useEffect } from "react";
import "./About.css";
import Logo from "../Logo/Logo";
import Button from "../../UI/Button/Button";
import DP from "../../images/dp6.jpeg";
import C from "../../images/c++.png";
import Java from "../../images/java.png";
import Python from "../../images/python.png";
import HTML from "../../images/html.png";
import CSS from "../../images/css.png";
import JS from "../../images/js.png";
import ReactJS from "../../images/react.png";
import Node from "../../images/node.png";
import Mongo from "../../images/mongo.png";
import PHP from "../../images/php.png";
import MYSQL from "../../images/mysql.png";
import Git from "../../images/git.png";
import Typescript from "../../images/typescript.png";
import Serverless from "../../images/serverless.png";
import AWS from "../../images/aws.png";
import Azure from "../../images/azure.png"
import AboutData from "../../Content/AboutData";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="about__wrap" data-aos="fade-up">
      <div className="about-header">
        <span className="about-header-1">1.</span>&nbsp;&nbsp;&nbsp;
        <span className="about-header-2">About</span>
        <hr className="about-line" />
      </div>
      <div className="about-body">
        <div className="about-text">
          {AboutData.map((para) => {
            return (
              <React.Fragment>
                <p className="about-para">{para}</p>
                <br />
              </React.Fragment>
            );
          })}
          <p className="about-para">
            I am proficient in the following technologies:
          </p>
          <table className="about-table">
            <tr>
              <td>
                <div className="lang-cell">
                  <img src={C}></img>&nbsp;&nbsp;
                  <p className="lang-text">C/C++</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={HTML}></img>&nbsp;&nbsp;
                  <p className="lang-text">HTML</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={ReactJS}></img>&nbsp;&nbsp;
                  <p className="lang-text">ReactJS</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={PHP}></img>&nbsp;&nbsp;
                  <p className="lang-text">PHP</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="lang-cell">
                  <img src={Java}></img>&nbsp;&nbsp;
                  <p className="lang-text">Java</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={CSS}></img>&nbsp;&nbsp;
                  <p className="lang-text">CSS</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={Node}></img>&nbsp;&nbsp;
                  <p className="lang-text">NodeJS</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={MYSQL}></img>&nbsp;&nbsp;
                  <p className="lang-text">MySQL</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="lang-cell">
                  <img src={Python}></img>&nbsp;&nbsp;
                  <p className="lang-text">Python</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={JS}></img>&nbsp;&nbsp;
                  <p className="lang-text">JavaScript</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={Mongo}></img>&nbsp;&nbsp;
                  <p className="lang-text">MongoDB</p>
                </div>
              </td>
              <td>
                <div className="lang-cell" id="exp">
                  <img src={Git}></img>&nbsp;&nbsp;
                  <p className="lang-text">Git</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="lang-cell">
                  <img src={Typescript}></img>&nbsp;&nbsp;
                  <p className="lang-text">Typescript</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={Serverless}></img>&nbsp;&nbsp;
                  <p className="lang-text">Serverless</p>
                </div>
              </td>
              <td>
                <div className="lang-cell">
                  <img src={AWS}></img>&nbsp;&nbsp;
                  <p className="lang-text">AWS</p>
                </div>
              </td>
              <td>
                <div className="lang-cell" id="exp">
                <img src={Azure}></img>&nbsp;&nbsp;
                <p className="lang-text">Microsoft Azure</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="about-image">
          <img src={DP} className="image" />
          <div className="about-box"></div>
        </div>
      </div>
      <div id="exp2"></div>
    </div>
  );
};

export default About;
