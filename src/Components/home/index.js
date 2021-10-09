import React from 'react'
import './home.css';
import Header from '../header/index'
import Footer from '../footer/index'
import Body from '../body/index'
import {useState} from 'react'

function Home() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div className="home">
            <div>
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div>
                {!isOpen && <Body />}
            </div>
            <div>
                {!isOpen && <Footer />}
            </div>
        </div>
    )
}

export default Home
