import React, { useState } from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
import ProjectsData from '../../Content/ProjectsData';
import Github from '../../images/github.png';
import Link from '../../images/link.png';
import Button from '../../UI/Button/Button';

const Footer = () => {

    return (
        <div className = "footer__wrap">
            <a href = "https://github.com/SaranshM/Personal-Portfolio">
                <p className = "footer-content-1">Designed &#38; Built by Saransh Mehta</p>
            </a>
        </div>
    )
}

export default Footer