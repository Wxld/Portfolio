import React from 'react'
import "./mobile.css"

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className="mobile">
          <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}>
            <i class="ri-close-line close"></i>
          </div>
          <div className="mobile-options">
            <div className="mobile-option">
                <a href="#projects">
                <i class="ri-paint-brush-line option-icon"></i>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="ri-macbook-line option-icon"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <i class="ri-briefcase-line option-icon"></i>Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="ri-user-line option-icon"></i>Connect 
                </a>
            </div>
          </div>
           
        </div>
    )
}

export default Mobile
