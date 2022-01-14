import React, { useState, useEffect } from 'react';
import './Introduction.css';
import Logo from '../Logo/Logo';
import Button from '../../UI/Button/Button';
import IntroductionData from '../../Content/IntroductionData';
import Resume from '../../Saransh-Mehta-Resume.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Introduction = () => {

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])

    const resumeHandler = () => {
        window.open(Resume)
    }

    return (
        <div className = "intro__wrap" data-aos = "fade" data-aos-delay="400"  >
            <p className = "intro-line-1" data-aos = "fade" data-aos-delay="400">Hi, my name is</p>
            <h1 className = "intro-line-2" data-aos = "fade-up" data-aos-delay="600">Saransh Mehta</h1>
            <h1 className = "intro-line-3" data-aos = "fade-up" data-aos-delay="600">{IntroductionData[0]} <span>{IntroductionData[1]}</span></h1>
            <p className = "intro-line-4" data-aos = "fade-up" data-aos-delay="800">{IntroductionData[2]}</p>
            <a href = "#" className = "resume" onClick = {resumeHandler} id = "about" data-aos = "fade-up" data-aos-delay="1000"><Button width = {window.innerWidth > 550 ? "15%" : window.innerWidth > 375 ? "30%" : "40%"} padding = {window.innerWidth > 550 ? "1%" : window.innerWidth > 375 ? "3%" : "4.5%"} fontSize = {window.innerWidth > 550 ? "1.2vw" : window.innerWidth > 375 ? "2vw" : "3vw"}>Resume</Button></a>
        </div>
    )
}

export default Introduction