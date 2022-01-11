import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';

const NavBar = () => {
    return (
        <div className = "nav-bar__wrap">
            <div className = "nav-bar__links">
                <Logo />
                <div className = "links">
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">1.</span>&nbsp;&nbsp; <span className = "link-text">About</span></a>
                    </div>
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">2.</span>&nbsp;&nbsp; <span className = "link-text">Education</span></a>
                    </div>
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">3.</span>&nbsp;&nbsp; <span className = "link-text">Experience</span></a>
                    </div>
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">4.</span>&nbsp;&nbsp; <span className = "link-text">Work</span></a>
                    </div>
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">5.</span>&nbsp;&nbsp; <span className = "link-text">Contact</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar