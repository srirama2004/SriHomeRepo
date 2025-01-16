// src/components/Skills.js
import React, { useEffect, useState } from 'react';
import './Skills.css';
import javaImg from './pic/java.png';
import CImg from './pic/C.png';
import CppImg from './pic/Cpp.png';
import pyImg from './pic/python.jpeg';
import sqlImg from './pic/sql.png';
import htmlImg from './pic/html.png';
import cssImg from './pic/css.png';
import jsImg from './pic/js.png';
import dsaImg from './pic/dsa.png';
import oopImg from './pic/oop.png';
import cnImg from './pic/cn.png';
import rdbImg from './pic/rdb.png';
import mlImg from './pic/ml.png';
import linuxImg from './pic/linux.png';
import esImg from './pic/es.png';
import canvaImg from './pic/canva.jpeg';
import figmaImg from './pic/figma.png';
const Skills = () => {
  const [lineFill, setLineFill] = useState(0);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    setLineFill(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <div className="scroll-line" style={{ width: `${lineFill}%` }}></div>

      <div className="skills-list">
        <div className="skills-category">
          <h2>Programming Languages:</h2>
          <div className="skills-items">
            <div className="skill-item">
              <img src={CImg} alt="Java" />
              <p>C </p>
            </div>
            <div className="skill-item">
              <img src={CppImg} alt="C++" />
              <p>C++</p>
            </div>
            <div className="skill-item">
              <img src={javaImg} alt="Java" />
              <p>Java</p>
            </div>
            <div className="skill-item">
              <img src={pyImg} alt="Python" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <img src={sqlImg} alt="SQL" />
              <p>SQL</p>
            </div>
            <div className="skill-item">
              <img src={htmlImg} alt="HTML" />
              <p>HTML </p>
            </div>
            <div className="skill-item">
              <img src={cssImg} alt="CSS" />
              <p>CSS </p>
            </div>
            <div className="skill-item">
              <img src={jsImg} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Core Concepts:</h2>
          <div className="skills-items">
            <div className="skill-item">
              <img src={dsaImg} alt="Data Structures & Algorithms" />
              <p>Data Structures & Algorithms</p>
            </div>
            <div className="skill-item">
              <img src={rdbImg} alt="Relational Databases" />
              <p>Relational Databases</p>
            </div>
            <div className="skill-item">
              <img src={oopImg} alt="OOP" />
              <p>OOP</p>
            </div>
            <div className="skill-item">
              <img src={mlImg} alt="Machine Learning" />
              <p>Machine Learning</p>
            </div>
            <div className="skill-item">
              <img src={linuxImg} alt="Linux" />
              <p>Linux</p>
            </div>
            <div className="skill-item">
              <img src={cnImg} alt="Computer Networks" />
              <p>Computer Networks</p>
            </div>
            <div className="skill-item">
              <img src={esImg} alt="Embedded Systems" />
              <p>Embedded Systems</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Other Skills:</h2>
          <div className="skills-items">
            <div className="skill-item">
              <img src={figmaImg} alt="Figma" />
              <p>Figma</p>
            </div>
            <div className="skill-item">
              <img src={canvaImg} alt="Canva" />
              <p>Canva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
