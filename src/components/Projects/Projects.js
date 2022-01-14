import React, { useState, useEffect } from 'react';
import './Projects.css';
import Logo from '../Logo/Logo';
import Button from '../../UI/Button/Button';
import ProjectsData from '../../Content/ProjectsData';
import Github from '../../images/github.png';
import Link from '../../images/link.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])

    return (
        <div className = "projects__wrap">
            <div className = "projects-header" data-aos = "fade-up">
                <span className = "projects-header-1">3.</span>&nbsp;&nbsp;&nbsp;
                <span className = "projects-header-2">Projects</span>
                <hr className = "projects-line"/>
            </div>
            <div className = "projects-body">
                {ProjectsData.map((obj) => {
                    return obj.id % 2 == 0 || window.innerWidth <= 550 ? (
                        <div className = "project-1"  data-aos = "fade-up">
                            <div className = "project-1-image">
                                    <img src = {obj.projectImage} className = "project-1-img"/>  
                            </div>
                            <div className = "project-1-details">
                                <div className = "project-1-details-1">Featured Project</div>
                                <div className = "project-1-details-2">{obj.projectTitle}</div>
                                <div className = "project-1-details-3">{obj.projectDescription}</div>
                                <div className = "project-1-details-4">
                                    {obj.projectsTags.map((tag) => {
                                        return (
                                            <p className = "tag">{tag}</p>
                                        )
                                    })}
                                </div>
                                <div className = "project-1-details-5">
                                    <a href = {obj.projectGithubLink} className = "project-1-icon-link" target = "_blank">
                                        <img src = {Github} className = "project-icon" />
                                    </a>
                                    <a href = {obj.projectLink} className = "project-1-icon-link" target = "_blank">
                                        <img src = {Link} className = "project-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className = "project-1 left"  data-aos = "fade-up">
                            <div className = "project-1-details left">
                                <div className = "project-1-details-1 left">Featured Project</div>
                                <div className = "project-1-details-2 left">{obj.projectTitle}</div>
                                <div className = "project-1-details-3 left">{obj.projectDescription}</div>
                                <div className = "project-1-details-4 left">
                                    {obj.projectsTags.map((tag) => {
                                        return (
                                            <p className = "tag">{tag}</p>
                                        )
                                    })}
                                </div>
                                <div className = "project-1-details-5 left">
                                    <a href = {obj.projectGithubLink} className = "project-1-icon-link left" target = "_blank">
                                        <img src = {Github} className = "project-icon left" />
                                    </a>
                                    <a href = {obj.projectLink} className = "project-1-icon-link left" target = "_blank">
                                        <img src = {Link} className = "project-icon left" />
                                    </a>
                                </div>
                            </div>
                            <div className = "project-1-image left">
                                    <img src = {obj.projectImage} className = "project-1-img left"/>  
                            </div>
                        </div>
                    )
                })}
            </div>  
        </div>
    )
}

export default Projects