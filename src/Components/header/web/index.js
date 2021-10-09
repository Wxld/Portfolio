import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <i class="ri-paint-brush-line option-icon"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i class="ri-macbook-line option-icon"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i class="ri-briefcase-line option-icon"></i>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="ri-user-line option-icon"></i>Connect 
                </a>
            </div>
        </div>
    )
}

export default Web
