import React, { useState } from 'react';
import './About.css';
import Logo from '../Logo/Logo';

const About = () => {
    return (
        <div className = "about__wrap">
            <p className = "about-line-1">Hi, my name is</p>
            <h1 className = "about-line-2">Saransh Mehta</h1>
            <h1 className = "about-line-3">I am an aspiring <span>Software Developer</span></h1>
            <p className = "about-line-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus. Arcu dictum varius duis at consectetur lorem donec massa sapien.</p>
        </div>
    )
}

export default About