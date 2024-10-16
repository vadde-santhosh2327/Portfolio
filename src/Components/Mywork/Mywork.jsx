import React from 'react';
import "./Mywork.css";
import mywork from "../../Assests/mywork";

const Mywork = () => {
  return (
    <div id="work" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork.map((work, index) => {
          return (
            <a key={index} href={work.w_github} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Mywork;
