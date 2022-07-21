import React from "react";
// import sc from  "../js"
function Nav () {
    return (
      <nav>
        <div className="links">
          <a href="#" id="home">
            home
          </a>
          <a href="#about-in" id="about">
            about
          </a>
          <a href="#resume-in" id="resume">
            resume
          </a>
          <a href="#skills-in" id="skills">
            skills
          </a>
          <a href="#works-in" id="works">
            works
          </a>
          <a href="#contact-in" id="contact">
            contact
          </a>
        </div>
        <button className="menu">menu</button>
      </nav>
    );
}
export default Nav ;