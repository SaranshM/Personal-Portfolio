import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])

    const [hamburger, setHamburger] = useState(false)

    const hamburgerHandler = () => {
        console.log("hi")
        setHamburger(!hamburger)
    }

    return (
        <div className = "nav-bar__wrap" id = "intro">
            <div className = "nav-bar__links">
                <Logo />
                <div className = "links" data-aos = "fade-down">
                    <div className = "link_wrap">
                        <Link to = "about" smooth = {true} duration = {500} className = "link"><span className = "link-sno">1.</span>&nbsp;&nbsp; <span className = "link-text">About</span></Link>
                    </div>
                    <div className = "link_wrap">
                        <Link to = "exp" smooth = {true} duration = {500} className = "link"><span className = "link-sno">2.</span>&nbsp;&nbsp; <span className = "link-text">Experience</span></Link>
                    </div>
                    <div className = "link_wrap">
                        <Link to = "projects" smooth = {true} duration = {500} className = "link"><span className = "link-sno">3.</span>&nbsp;&nbsp; <span className = "link-text">Projects</span></Link>
                    </div>
                    <div className = "link_wrap">
                        <Link to = "contact" smooth = {true} duration = {500} className = "link"><span className = "link-sno">4.</span>&nbsp;&nbsp; <span className = "link-text">Contact</span></Link>
                    </div>
                </div>
                <div className = "hamburger" onClick = {hamburgerHandler}>
                    <div className = {`hamburger-line-1 ${hamburger ? "on" : ""}`} ></div>
                    <div className = {`hamburger-line-2 ${hamburger ? "on" : ""}`} ></div>
                    <div className = {`hamburger-line-3 ${hamburger ? "on" : ""}`} ></div>
                </div> 
                <div className = {`hamburger-menu ${hamburger ? "on" : ""}`}>
                    <div className = {`hamburger-links-wrap ${hamburger ? "on" : ""}`}>
                        <div className = "hamburger-links" onClick = {hamburgerHandler}>
                            <Link to = "about" smooth = {true} duration = {500} className = "link"><span className = "link-sno">1.</span>&nbsp;&nbsp; <span className = "link-text" onClick = {hamburgerHandler}>About</span></Link>
                        </div>
                        <div className = "hamburger-links" onClick = {hamburgerHandler}>
                            <Link to = "exp2" smooth = {true} duration = {500} className = "link"><span className = "link-sno">2.</span>&nbsp;&nbsp; <span className = "link-text" onClick = {hamburgerHandler}>Experience</span></Link>
                        </div>
                        <div className = "hamburger-links" onClick = {hamburgerHandler}>
                            <Link to = "projects" smooth = {true} duration = {500} className = "link"><span className = "link-sno">3.</span>&nbsp;&nbsp; <span className = "link-text" onClick = {hamburgerHandler}>Projects</span></Link>
                        </div>
                        <div className = "hamburger-links" onClick = {hamburgerHandler}>
                            <Link to = "contact" smooth = {true} duration = {500} className = "link"><span className = "link-sno">4.</span>&nbsp;&nbsp; <span className = "link-text" onClick = {hamburgerHandler}>Contact</span></Link>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    )
}

export default NavBar