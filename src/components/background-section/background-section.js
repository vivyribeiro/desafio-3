import React from "react";
import './background-section.css'
import ProfileImg from '../profile-section/profile-section.js'

function BackgroundSection() {
 
    return (
        <>
          <section className="section-background">
              <div className="background-image"></div>
              <div className="profile-section"><ProfileImg/></div>
          </section>
        </>      
    );
  }
  
  export default BackgroundSection;