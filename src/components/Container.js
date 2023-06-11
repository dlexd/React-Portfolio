import React, { useState } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

function Container() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header activeSection={activeSection} handleNavigation={handleNavigation} />
      {renderPage()}
    </div>
  );
}

export default Container;
