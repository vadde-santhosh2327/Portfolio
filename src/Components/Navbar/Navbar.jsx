import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'> 
      <img src="your-logo.png" alt="Logo" /> {/* Add your logo image path here */}
      <ul className="nav-menu">
        <li><a href="#home" className='link'>Home</a></li>
        <li><a href="#about" className='link'>About Me</a></li>
        <li><a href="#services" className='link'>Services</a></li>
        <li><a href="#work" className='link'>Portfolio</a></li>
        <li><a href="#contact" className='link'>Contact</a></li>
      </ul>
      <div className="nav-connect">
       <a href="#contact" className='link2'> Connect With Me</a>
      </div>
    </div>
  );
}

export default Navbar;
