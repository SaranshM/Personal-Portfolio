import React, { useState } from 'react';
import './About.css';
import Logo from '../Logo/Logo';
import Button from '../../UI/Button/Button';
import DP from '../../images/dp2.jpeg';
import C from '../../images/c++.png'
import Java from '../../images/java.png'
import Python from '../../images/python.png'
import HTML from '../../images/html.png'
import CSS from '../../images/css.png'
import JS from '../../images/js.png'
import ReactJS from '../../images/react.png'
import Node from '../../images/node.png'
import Mongo from '../../images/mongo.png'
import PHP from '../../images/php.png'
import MYSQL from '../../images/mysql.png'
import Git from '../../images/git.png'


const About = () => {
    return (
        <div className = "about__wrap">
            <div className = "about-header">
                <span className = "about-header-1">1.</span>&nbsp;&nbsp;&nbsp;
                <span className = "about-header-2">About</span>
                <hr className = "about-line"/>
            </div>
            <div className = "about-body">
                <div className = "about-text">
                    <p className = "about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.</p><br/>
                    <p className = "about-para">Fermentum et sollicitudin ac orci phasellus. Nulla facilisi cras fermentum odio eu feugiat. Et tortor consequat id porta nibh venenatis.</p><br/>
                    <p className = "about-para">Fermentum et sollicitudin ac orci phasellus. Nulla facilisi cras fermentum odio eu feugiat. Et tortor consequat id porta nibh venenatis.</p><br/>
                    <p className = "about-para">I am proficient in the following technologies:</p>
                    <table className = "about-table">
                        <tr>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {C}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">C/C++</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {HTML}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">HTML</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {ReactJS}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">ReactJS</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {PHP}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">PHP</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {Java}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">Java</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {CSS}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">CSS</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {Node}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">NodeJS</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {MYSQL}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">MySQL</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {Python}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">Python</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {JS}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">JavaScript</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {Mongo}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">MongoDB</p>
                                </div>
                            </td>
                            <td>
                                <div className = "lang-cell">
                                    <img src = {Git}></img>&nbsp;&nbsp;
                                    <p className = "lang-text">Git</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className = "about-image">
                    <img src = {DP} className = "image" />
                    <div className = "about-box"></div>
                </div>
            </div>
        </div>
    )
}

export default About