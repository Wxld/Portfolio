import React from 'react'
import './header.css'
import Web from './web'
import Mobile from './mobile'

function Header({isOpen,setIsOpen}) {
    return (
        <div className="header">
           <div className="logo">Portfolio.</div>
           <div className="menu">
               <div className="web-menu"><Web /></div>
               <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="ri-apps-line menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
               </div>
           </div> 
        </div>
    )
}

export default Header
