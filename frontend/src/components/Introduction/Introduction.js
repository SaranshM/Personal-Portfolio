import React, { useState } from 'react';
import './Introduction.css';
import Logo from '../Logo/Logo';
import Button from '../../UI/Button/Button';
import IntroductionData from '../../Content/IntroductionData';
import Resume from '../../Saransh-Mehta-Resume.pdf'

const Introduction = () => {

    const resumeHandler = () => {
        window.open(Resume)
    }

    return (
        <div className = "intro__wrap">
            <p className = "intro-line-1">Hi, my name is</p>
            <h1 className = "intro-line-2">Saransh Mehta</h1>
            <h1 className = "intro-line-3">{IntroductionData[0]} <span>{IntroductionData[1]}</span></h1>
            <p className = "intro-line-4">{IntroductionData[2]}</p>
            <a href = "#" className = "resume" onClick = {resumeHandler}><Button width = {window.innerWidth > 550 ? "15%" : window.innerWidth > 375 ? "30%" : "40%"} padding = {window.innerWidth > 550 ? "1%" : window.innerWidth > 375 ? "3%" : "4.5%"} fontSize = {window.innerWidth > 550 ? "1.2vw" : window.innerWidth > 375 ? "2vw" : "3vw"}>Resume</Button></a>
        </div>
    )
}

export default Introduction