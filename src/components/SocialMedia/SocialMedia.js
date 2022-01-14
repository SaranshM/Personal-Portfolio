import React, { useState, useEffect } from 'react';
import './SocialMedia.css';
import Logo from '../Logo/Logo';
import Github from '../../images/github.png';
import Instagram from '../../images/insta.png';
import Linkedin from '../../images/linkedin.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SocialMedia = () => {

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])

    return (
        <div className = "social-media" data-aos = "fade-right" data-aos-delay="1000">
            <div className = "icons">
                <a href = "https://github.com/SaranshM" className = "icon" target = "_blank">
                    <img src={Github}/>
                </a>
                <a href = "https://www.instagram.com/__saranshmehta__/" className = "icon" target = "_blank">
                    <img src={Instagram}/>
                </a>
                <a href = "https://www.linkedin.com/in/saransh-mehta-0802/" className = "icon" target = "_blank">
                    <img src={Linkedin}/>
                </a>
            </div>
            <div className = "line"></div>
        </div>
        
    )
}

export default SocialMedia