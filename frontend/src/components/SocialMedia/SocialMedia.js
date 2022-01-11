import React, { useState } from 'react';
import './SocialMedia.css';
import Logo from '../Logo/Logo';
import Github from '../../images/github.png';
import Instagram from '../../images/insta.png';
import Linkedin from '../../images/linkedin.png';


const SocialMedia = () => {
    return (
        <div className = "social-media">
            <div className = "icons">
                <a href = "#" className = "icon">
                    <img src={Github}/>
                </a>
                <a href = "#" className = "icon">
                    <img src={Instagram}/>
                </a>
                <a href = "#" className = "icon">
                    <img src={Linkedin}/>
                </a>
            </div>
            <div className = "line"></div>
        </div>
        
    )
}

export default SocialMedia