import React from 'react';
import "./about.css";
import profile from "../../images/profile.png";
// import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about">
        <div className="content">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="introName">Joaquin Fernandez.</span><br/>Software Developer</span>
            <p className="text">I'm <strong>25 years old</strong> and i'm from in <strong>Montevideo, Uruguay</strong>.
I am a FullStack software developer with preference for the <strong>FrontEnd</strong> area.<br/>
I participated in both <strong>individual and group projects</strong>, fundamental to strengthen <strong>soft skills</strong> such as adaptability, communication
time management, collaboration, resilience and <strong>continuous learning</strong>. <br/>
I am <strong>creative</strong> and <strong>optimistic</strong>, always looking for new ways to address challenges with <strong>efficient and innovative solutions</strong>. <br/>
I am excited to <strong>continue exploring</strong> new technologies and looking for <strong>new challenges</strong> that will help me continue to grow both professionally and
personally in the IT industry.</p>
        </div>
        <img src={profile} alt="profile" className="profile" />
    </section>
  );
}

export default About;
