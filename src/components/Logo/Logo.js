import React, { useState, useEffect } from 'react';
import './Logo.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link, animateScroll as scroll} from 'react-scroll';

const Logo = () => {

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])

    return (
            <div className = "logo-wrap" data-aos = "fade-down" onClick={() => scroll.scrollToTop()}>
                    <div className = "logo">
                        <p className = "initial">S</p>
                    </div>
            </div>
    )
}

export default Logo