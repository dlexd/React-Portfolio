import React, { useState } from 'react';
import profileImage from '../images/profile.JPG';
import 'tailwindcss/tailwind.css';

function AboutMe() {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (button) => {
    setActiveButton(button === activeButton ? '' : button);
  };

  return (
    <section id="about" className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <div className="container mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={profileImage} alt="Profile" className="max-w-[768px]" />
          </figure>
          <div className="card-body">
            <textarea
              className="textarea textarea-bordered mb-4 resize-none"
              rows="13"
              placeholder="My name is Derek Le. I am 25 years old currently seeking employment full-time. I originally graduated CSUF with a bachelor's degree in Business Administration with a concentration in Accounting. Since then, I have decided to change my career path and pursue a career in full stack web development. I have recently finished a 6 month bootcamp at UCI for full stack web development. This portfolio is a showcase of my skills and projects that I have worked on during the course of the bootcamp as well as any personal projects that I have worked on."
            ></textarea>
            <div className="buttons-container flex justify-center mb-4">
              <button
                className={`bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 ${
                  activeButton === 'skills' ? 'bg-opacity-50' : ''
                }`}
                onClick={() => handleButtonClick('skills')}
              >
                Skills
              </button>
              <button
                className={`bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 ${
                  activeButton === 'experience' ? 'bg-opacity-50' : ''
                }`}
                onClick={() => handleButtonClick('experience')}
              >
                Experience
              </button>
              <button
                className={`bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 ${
                  activeButton === 'education' ? 'bg-opacity-50' : ''
                }`}
                onClick={() => handleButtonClick('education')}
              >
                Education
              </button>
            </div>
            <div className="content-container">
              {activeButton === 'skills' && (
                <div className="text-center">
                  <ul>
                    <li className="text-white">HTML</li>
                    <li className="text-white">CSS</li>
                    <li className="text-white">JavaScript</li>
                    <li className="text-white">React</li>
                    {/* Add more skills */}
                  </ul>
                </div>
              )}
              {activeButton === 'experience' && (
                <div className="text-center">
                  <ul>
                    <li className="text-white">Still currently looking for my first experience as a full stack web developer.</li>
                    {/* Add more experience */}
                  </ul>
                </div>
              )}
              {activeButton === 'education' && (
                <div className="text-center">
                  <ul>
                    <li className="text-white">Bachelor's Degree in Accounting</li>
                    <li className="text-white">UCI Bootcamp: Full Stack Web Development</li>
                    {/* Add more education */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
