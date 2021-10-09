import React from 'react'
import './work.css'
import Seperator from '../common/seperator/index'

function Work() {
    return (
        <div className="work">
            <Seperator />
            <label className="section-title">Work</label>
            <div className="work-list">
                <p>I am <span className="work-imp">actively looking</span> for front-end role internships. I am a team person and love to collaborate. <br/><br/> Currently I have no experience but it will be an honour for me to <span className="work-imp">mention your company</span> in this section. </p>
                <img src={require("../../../assets/work.png").default} alt='work svg' className="work-photo" />
            </div>
        </div>
    )
}

export default Work
