import React from 'react';

function Header() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* Add more later*/}
          </ul>
        </nav>
        <h1>My Portfolio</h1>
        {/* Header content here */}
      </header>
    );
  }

export default Header;
