import React, { useState } from 'react';
import './Email.css';
import Logo from '../Logo/Logo';
import Github from '../../images/github.png';
import Instagram from '../../images/insta.png';
import Linkedin from '../../images/linkedin.png';


const Email = () => {
    return (
        <div className = "email__wrap">
            <div className = "email">
                <a href = "mailto:saranshmehta96@gmail.com">saranshmehta96@gmail.com</a>
            </div>
            <div className = "line"></div>
        </div>
        
    )
}

export default Email