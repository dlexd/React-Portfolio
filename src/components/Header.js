import React from 'react';

function Header({ activeSection, handleNavigation }) {
  return (
    <header>
      <nav>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#home" onClick={() => handleNavigation('home')}>
              Home
            </a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about" onClick={() => handleNavigation('about')}>
              About
            </a>
          </li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}>
            <a href="#portfolio" onClick={() => handleNavigation('portfolio')}>
              Portfolio
            </a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={() => handleNavigation('contact')}>
              Contact
            </a>
          </li>
          <li className={activeSection === 'resume' ? 'active' : ''}>
            <a href="#resume" onClick={() => handleNavigation('resume')}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
