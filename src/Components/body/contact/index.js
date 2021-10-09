import React from 'react'
import './contact.css'
import Seperator from "../common/seperator/index"
import SocialContact from '../common/social-contact/index'

function Contact() {
    return (
        <div className="contact">
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the below platform</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require("../../../assets/sampleresume.png").default}>
                        <i class="ri-download-line download-icon"></i>Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
