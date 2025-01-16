import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Typewriter from 'typewriter-effect';
import geekForGeeksImage from './pic/geek.jpg'; 
import linkedInImage from './pic/linkedin.jpg';
import leetCodeImage from './pic/leetcode.png';
import GithubImage from './pic/github.png';
import MyImg from './pic/ui1.jpg';

const Welcome = () => {
  return (
    <div className="parent-container">
      <div className="welcome-container">
        <h1 className="welcome-text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hello There 👋!')
                .pauseFor(2000)
                .deleteAll()
                .typeString('This is Sriram V ')
                .start();
            }}
          />
        </h1>
        <p className="welcome-description">
          A Computer Science B-tech student with keen interest in coding and other technologies.
          Eager for positions where I can apply my skills and learn more. I always strive for
          excellence, whether working alone or with a team.
        </p>
        <div className="social-links">
          <a href="https://www.geeksforgeeks.org/user/sriramrd6c/?ref=header_profile" target="_blank" rel="noopener noreferrer">
            <img src={geekForGeeksImage} alt="GeekforGeeks" className="social-icon" />
          </a>
          <a href="https://leetcode.com/u/sriramavate/" target="_blank" rel="noopener noreferrer">
            <img src={leetCodeImage} alt="LeetCode" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/srirama-v-b5bb32293/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInImage} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/srirama2004/SriHomeRepo/tree/main" target="_blank" rel="noopener noreferrer">
            <img src={GithubImage} alt="Github" className="social-icon" />
          </a>
        </div>
        <Link to="/projects">
          <button className="action-button">View Projects</button>
        </Link>
      </div>
      <div className="hover-container">
        <div className="img-container">
          <img src={MyImg} alt="Floating" className="floating-image" />
        </div>
        <Link to="/expe">
          <button className="action1-button">Know More</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
