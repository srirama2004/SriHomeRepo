import React from 'react';
import './expe.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-section">
      <h3>Experience</h3>
        <h4> Invengor Technologies </h4>
        <p>
          Working as a Machine Learning intern creating a medical service system using Python, Flask, ScikitLearn, and other ML tools.
        </p>
        <p>
          <strong>Projects:</strong>
          <ul>
            <li>
              Beta Medical Services - A Medical service provider integrated with ML models and many other features. To see more, please visit the projects section.
            </li>
          </ul>
        </p>
        <p>
          <strong>Skills:</strong>
          <ul>
            <li>Programming Languages: Python, HTML, JavaScript</li>
            <li>Technologies: Flask, PostgreSQL, TensorFlow, ScikitLearn</li>
          </ul>
        </p>
      </div>
      <div className="courses-section">
        <h3>Courses</h3>
        <ul>
        <li>
    Exploratory Data Analysis for Machine Learning - <strong>IBM</strong>
    <a href="https://coursera.org/share/2716363f16da8098a3041263ca7b8879" target="_blank" class="certificate-link">Certificate</a>
  </li>
  <li>
    Supervised Machine Learning: Classification - <strong>IBM</strong>
    <a href="https://coursera.org/share/aff5958c63d29045ea6705c5f53e7312" target="_blank" class="certificate-link">Certificate</a>
  </li>
  <li>
    Supervised Machine Learning: Regression - <strong>IBM</strong>
    <a href="https://coursera.org/share/eb908b4c7de3f10029cdb0f830a615e5" target="_blank" class="certificate-link">Certificate</a>
  </li>
  <li>
    Unsupervised Machine Learning - <strong>IBM</strong>
    <a href="https://coursera.org/share/2cbfa3d073a657eeb81d648d01f70b86" target="_blank" class="certificate-link">Certificate</a>
  </li>
  <li>
    Introduction to TensorFlow for AI, ML, and DL - <strong>DeepLearning.ai</strong>
    <a href="https://coursera.org/share/1c13e75dc0557eede49d5cc017d850de" target="_blank" class="certificate-link">Certificate</a>
  </li>
  <li>
    Introduction to Machine Learning - <strong>IIT Kharagpur</strong>
  </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Experience;
