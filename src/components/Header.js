import React from 'react';
import 'tailwindcss/tailwind.css';

function Header({ activeSection, handleNavigation }) {
  const handleClick = (section) => {
    if (handleNavigation) {
      handleNavigation(section);
    }
  };

  return (
    <header className="bg-green-900">
      <nav className="flex items-center justify-center h-16">
        <div className="flex items-center space-x-4">
          <a
            className={`text-white ${
              activeSection === 'about' ? 'underline' : ''
            }`}
            href="#about"
            onClick={() => handleClick('about')}
          >
            About
          </a>
          <a
            className={`text-white ${
              activeSection === 'portfolio' ? 'underline' : ''
            }`}
            href="#portfolio"
            onClick={() => handleClick('portfolio')}
          >
            Portfolio
          </a>
          <a
            className={`text-white ${
              activeSection === 'contact' ? 'underline' : ''
            }`}
            href="#contact"
            onClick={() => handleClick('contact')}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
