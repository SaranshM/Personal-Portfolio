import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';

const NavBar = () => {

    const [hamburger, setHamburger] = useState(false)

    const hamburgerHandler = () => {
        setHamburger(!hamburger)
    }

    return (
        <div className = "nav-bar__wrap">
            <div className = "nav-bar__links">
                <Logo />
                <div className = "links">
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">1.</span>&nbsp;&nbsp; <span className = "link-text">About</span></a>
                    </div>
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">2.</span>&nbsp;&nbsp; <span className = "link-text">Experience</span></a>
                    </div>
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">3.</span>&nbsp;&nbsp; <span className = "link-text">Projects</span></a>
                    </div>
                    <div className = "link_wrap">
                        <a href = "#" className = "link"><span className = "link-sno">4.</span>&nbsp;&nbsp; <span className = "link-text">Contact</span></a>
                    </div>
                </div>
                <div className = "hamburger" onClick = {hamburgerHandler}>
                    <div className = {`hamburger-line-1 ${hamburger ? "on" : ""}`} ></div>
                    <div className = {`hamburger-line-2 ${hamburger ? "on" : ""}`} ></div>
                    <div className = {`hamburger-line-3 ${hamburger ? "on" : ""}`} ></div>
                </div> 
                <div className = {`hamburger-menu ${hamburger ? "on" : ""}`}>
                    <div className = "hamburger-links-wrap">
                        <div className = "hamburger-links">
                            <a href = "#" className = "link"><span className = "link-sno">1.</span>&nbsp;&nbsp; <span className = "link-text">About</span></a>
                        </div>
                        <div className = "hamburger-links">
                            <a href = "#" className = "link"><span className = "link-sno">2.</span>&nbsp;&nbsp; <span className = "link-text">Experience</span></a>
                        </div>
                        <div className = "hamburger-links">
                            <a href = "#" className = "link"><span className = "link-sno">3.</span>&nbsp;&nbsp; <span className = "link-text">Projects</span></a>
                        </div>
                        <div className = "hamburger-links">
                            <a href = "#" className = "link"><span className = "link-sno">4.</span>&nbsp;&nbsp; <span className = "link-text">Contact</span></a>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    )
}

export default NavBar