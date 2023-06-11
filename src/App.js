import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
    const [activeSection, setActiveSection] = useState('AboutMe');
  
    const handleNavigation = (section) => {
      setActiveSection(section);
    };
  
    return (
      <div>
        <Header activeSection={activeSection} handleNavigation={handleNavigation} />
        {activeSection === 'About' && <AboutMe />}
        {activeSection === 'Portfolio' && <Portfolio />}
        {activeSection === 'Contact' && <Contact />}
        {activeSection === 'Resume' && <Resume />}
      </div>
    );
  }
  
  export default App;