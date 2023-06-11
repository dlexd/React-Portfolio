import React from 'react';

function Resume() {
    const proficiencies = [
      'JavaScript',
      'React',
      'HTML',
      'CSS',
    ];
  
    return (
      <section>
        <h2>Resume</h2>
        <div>
          <a href="Resume" download>Download Resume</a>
        </div>
        <div>
          <h3>Proficiencies</h3>
          <ul>
            {proficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

export default Resume;