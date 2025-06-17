import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
function Navb() {
    const [showMenu, setShowMenu] = useState(false);
    const hndlMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <h1>AMAN</h1>

                    </div>
                    <nav className={showMenu ? 'mobile' : 'desktop'}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="hamburger">
                        <button onClick={hndlMenu} >
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navb
