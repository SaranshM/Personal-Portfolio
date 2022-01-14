import React, { useState, useEffect } from 'react';
import './OtherProjects.css';
import Logo from '../Logo/Logo';
import Button from '../../UI/Button/Button';
import OtherProjectsData from '../../Content/OtherProjectsData';
import Github from '../../images/github.png';
import Link from '../../images/link.png';
import Folder from '../../images/folder.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OtherProjects = () => {

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])

    return (
        <div className = "other-projects__wrap">
            <h1 className = "other-projects-header">Other Noteworthy Projects</h1>
            <div className = "other-projects-wrap">
                {OtherProjectsData.map((arr) => {
                    return (
                        <div className = "other-projects-row">
                            {arr.map((obj) => {
                                return (
                                    <a href = {obj.projectLink} className = "other-projects-card-link" target = "_blank"  data-aos = "fade-up">
                                        <div className = "other-projects-card">
                                            <div className = "card-header">
                                                <div className = "card-header-icon-div">
                                                    <img src = {Folder} className = "cards-header-icon" />
                                                </div>
                                                <div className = "card-header-icon-div">
                                                    <a href = {obj.projectGithubLink} className = "card-header-icon-a" target = "_blank">
                                                        <img src = {Github} className = "cards-header-icon" />
                                                    </a>
                                                    {obj.projectLinkExist ? (
                                                        <a href = {obj.projectLink} className = "card-header-icon-a" target = "_blank">
                                                            <img src = {Link} className = "cards-header-icon" />
                                                        </a>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className = "other-projects-content">
                                                <p className = "other-projects-content-1">{obj.projectTitle}</p>
                                                <p className = "other-projects-content-2">{obj.projectDescription}</p>
                                                <div className = "other-projects-content-3">
                                                    {obj.projectsTags.map((tag) => {
                                                        return (
                                                            <p className = "other-projects-content-3-text">{tag}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    )
                })}
                <div id = "contact"></div>
            </div>
        </div>
    )
}

export default OtherProjects