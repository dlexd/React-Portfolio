import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="introduction">
            <h3>Hello, I'm Derek Le</h3>
            <p>My name is Derek Le. I am 25 years old currently seeking employment full-time. I studied accounting at CSUF and have recently finished a bootcamp for full stack web development at UCI.</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              {/* Add more skills */}
            </ul>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <ul>
              <li>Still currently looking for my first experience as a full stack web developer.</li>
              {/* Add more experience */}
            </ul>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>Bachelor's Degree in Accounting</li>
              <li>UCI Bootcamp: Full Stack Web Development</li>
              {/* Add more education */}
            </ul>
          </div>
          <a href="#portfolio" className="cta-button">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}

export default About;
