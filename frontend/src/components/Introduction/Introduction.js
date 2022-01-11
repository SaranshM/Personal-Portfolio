import React, { useState } from 'react';
import './Introduction.css';
import Logo from '../Logo/Logo';
import Button from '../../UI/Button/Button';

const Introduction = () => {
    return (
        <div className = "intro__wrap">
            <p className = "intro-line-1">Hi, my name is</p>
            <h1 className = "intro-line-2">Saransh Mehta</h1>
            <h1 className = "intro-line-3">I am an aspiring <span>Software Developer</span></h1>
            <p className = "intro-line-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus. Arcu dictum varius duis at consectetur lorem donec massa sapien.</p>
            <a href = "#" className = "resume"><Button width = "15%" padding = "1%" fontSize = "1.2vw">Resume</Button></a>
        </div>
    )
}

export default Introduction