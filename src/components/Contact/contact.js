import React from 'react';
import "./contact.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="contactContainer"> {/* Agregado el contenedor principal */}
      <div id="contact">
        <h1 className="Title">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm">
          <input type="text" className="name" placeholder='Name' />
          <input type="text" className="email" placeholder='Email' />
          <textarea className="message" rows="5" placeholder='Message'></textarea>
          <button type='submit' value='send' className="submit">Submit</button>
          <div className="links">
            <img src={FaLinkedin} alt="Linkedin" className="link" />
            <img src={FaGithub} alt="Github" className="link" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
