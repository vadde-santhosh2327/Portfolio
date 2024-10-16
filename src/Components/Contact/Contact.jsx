import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';  // Using faEnvelope for mail icon
import "./Contact.css";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "382e5d5d-1400-4bd5-8317-90ede58e895c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} /> {/* Mail icon */}
              <p><a href="mailto:vadde.santhosh50@gmail.com">vadde.santhosh50@gmail.com</a></p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faPhone} />
              <p>8309206488</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Hyderabad</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}className='contact-right'>
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter ur name' name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter ur email' name="email" />
            <label htmlFor="">Write ur msg here</label>
            <textarea name="maessage" rows="8" placeholder='Enter ur message'  id=""></textarea>
            <button type="submit" className='contact-submit'>SUbmit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
