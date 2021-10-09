import React from 'react'
import './social.css'
import {SocialData} from '../../../data/social.js'

function Social() {
    const data = SocialData;
    return (
        <div className='social-contact'>
            {data.map((item) => {
                return (
                <a href={item.link}>
                    <div className="social-icon-div">
                        <img src={item.icon} className="social-icon" alt="socials"/>
                    </div>
                </a>
                )
            })}
        </div>
    )
}

export default Social
