import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <div className='rec1'><li><a href="#home">Home</a></li></div>
          <div className='rec2'><li><a href="#projects">Projects</a></li></div>
          <div className='rec3'><li><a href="#contact">Contact</a></li></div>
          <div className='rec4'><li><a href="#about">About</a></li></div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;