import React from 'react'
import "./About.css"
import profile from "../../Assests/profile.png"
const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" className='img2' />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hello! I'm Santhosh Kumar, an aspiring Software Developer with a strong foundation in programming and a keen interest in web development, automation, and problem-solving. </p>
                <p>I’m currently focusing on enhancing my skills in JavaScript, React, and CSS, having worked on several projects like creating dynamic web applications  and learning about REST APIs and Web APIs to integrate data seamlessly.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>JS</p><hr style={{width:"40%"}}/>
                </div>
                <div className="about-skill">
                    <p>React-Js</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>Bootstrap</p><hr style={{width:"80%"}}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
