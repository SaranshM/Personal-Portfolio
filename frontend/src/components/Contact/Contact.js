import React, { useState } from 'react';
import './Contact.css';
import Logo from '../Logo/Logo';
import ProjectsData from '../../Content/ProjectsData';
import Github from '../../images/github.png';
import Link from '../../images/link.png';
import Button from '../../UI/Button/Button';

const Contact = () => {

    return (
        <div className = "contact__wrap">
            <div className = "contact-header">
                <hr className = "contact-line first"/>
                <span className = "contact-header-1">4.</span>&nbsp;&nbsp;&nbsp;
                <span className = "contact-header-2">Contact</span>
                <hr className = "contact-line"/>
            </div>
            <h1 className = "contact-content-1">Get In Touch</h1>
            <h1 className = "contact-content-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
            <a href = "mailto:saranshmehta96@gmail.com">
                <Button width = "15%" padding = "1%" fontSize = "1.2vw">Say Hello</Button>
            </a>
        </div>
    )
}

export default Contact