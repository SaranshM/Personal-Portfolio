import React, { useState, useEffect } from 'react';
import './Email.css';
import Logo from '../Logo/Logo';
import Github from '../../images/github.png';
import Instagram from '../../images/insta.png';
import Linkedin from '../../images/linkedin.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Email = () => {

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])

    return (
        <div className = "email__wrap" data-aos = "fade-left" data-aos-delay="1000">
            <div className = "email">
                <a href = "mailto:saranshmehta96@gmail.com">saranshmehta96@gmail.com</a>
            </div>
            <div className = "line"></div>
        </div>
        
    )
}

export default Email