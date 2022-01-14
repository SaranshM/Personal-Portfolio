import React, { useState } from 'react';
import './Experience.css';
import Logo from '../Logo/Logo';
import Button from '../../UI/Button/Button';
import ExperienceData from '../../Content/ExperienceData';

const Experience = () => {
    
    const [companyId, setCompanyId] = useState(0);

    const companyClickHandler = (id) => {
        console.log(id)
        setCompanyId(id)
    }

    return (
        <div className = "exp__wrap">
            <div className = "exp-header">
                <span className = "exp-header-1">2.</span>&nbsp;&nbsp;&nbsp;
                <span className = "exp-header-2">Experience</span>
                <hr className = "exp-line"/>
            </div>
            <div className = "exp-body">
                <div className = "exp-companies">
                    {ExperienceData.map((obj) => {
                        return (
                            <div className = {`exp-company ${companyId == obj.id ? "current" : ""}`} onClick = {() => companyClickHandler(obj.id)}>
                                <p className = {`exp-company-text ${companyId == obj.id ? "currentText" : ""}`}>{obj.companyName}</p>
                            </div>
                        )
                    })}
                </div>
                <div className = "exp-details">
                    <p className = "exp-details-1">{ExperienceData[companyId].jobRole} &nbsp; <span className = "exp-details-1-1">@&nbsp;&nbsp; {ExperienceData[companyId].companyName}</span></p>
                    <p className = "exp-details-2">{ExperienceData[companyId].startDate} &nbsp; - &nbsp; {ExperienceData[companyId].endDate}</p>
                    <div className = "exp-bullets">
                        <ul className = "exp-bullets-list">
                            {ExperienceData[companyId].bulletPoints.map((point) => {
                                return (
                                    <li className = "exp-point">{point}</li>
                                )
                            })}
                            {ExperienceData[companyId].projectLink ? (
                                <li className = "exp-point"><a href = {ExperienceData[companyId].projectLinkUrl} style = {{ textDecoration: "none", color: "#36c275"}} target = "_blank">{ExperienceData[companyId].projectLinkUrl}</a></li>
                            ):(
                                ""
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience