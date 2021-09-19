import React from "react";
import './profile-section.css'
import { portifolio } from "../data";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
// import ProfileImg from  '../../../public/profile_image.jpg'


function Profile() {
 
    return (
          <section className="section-profile">
              <div className="profile">
                  <img src={portifolio.profile} className="profile-image" alt="Viviane Ribeiro" />
                  <h1 className="name">{portifolio.name}</h1>
                  <h4 className="occupation">{portifolio.occupation}</h4>
              </div>
              <div className="contact">
                <a href="https://github.com/vivyribeiro" className="contact-links"> 
                    < FaGithubSquare className="contact-icons" />
                    <span className="subtitle">Github</span>
                </a>
                <a href="https://www.linkedin.com/in/vivyribeiro" className="contact-links"> 
                    < FaLinkedin className="contact-icons" />
                    <span className="subtitle">Linkedin</span>
                </a>
                <a href="mailto:vivy.saribeiro@gmail.com" className="contact-links"> 
                    < FaEnvelopeSquare className="contact-icons" />
                    <span className="subtitle">E-mail</span>
                </a>
              </div>
          </section>
    );
  }
  
  export default Profile;