import React from 'react';
import './Hero.css';
import profile from "../../Assests/profile.png"; // Correct import

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="Logo" className='img1'/> {/* Use the imported logo */}
      <h1><span>I'm Santhosh Kumar,</span>front end developer </h1>
      <p>I'm  a Front-End Developer with a strong focus on building visually appealing and responsive web applications. I specialize in JavaScript, React, and CSS, creating seamless user experiences while ensuring clean, efficient code for optimal performance. 
      </p>
      <div className="hero-action">
        <div  className="heroconnect">
           <a href="#contact" className='link2'> Connect with me</a>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;

