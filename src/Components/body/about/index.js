import React from 'react'
import Social from '../common/social-contact/index'
import './about.css'
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hi there 👋, I am <br/> <span className="name-info">Ranjeet</span> .<br/> I love to build web applications.
                </div>
                <div className="about-photo">
                    <img src={require("../../../assets/coding.png").default} className="picture" alt="Hero" />
                </div>
            </div>
            <Social />
        </div>
    )
}

export default About
