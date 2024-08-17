import React from 'react';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <img className='logoImg' src={logo} alt="Company Logo" />
            <h1 className='navHeading'>Display Challenge</h1>
        </div>
    )
}

export default Navbar