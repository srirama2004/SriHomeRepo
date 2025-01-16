import React from 'react';
import './projects.css';
import resortManagementImage from './pic/img1.jpeg'; // Adjust the filename to match your actual image
import icuAdmissionImage from './pic/img2.jpeg'; // Adjust the filename to match your actual image

const Projects = () => {
  const projects = [
    {
      title: 'Resort Management',
      description: 'A website built with React.js for the frontend, Express.js for the backend, and PostgreSQL as the database that allows users to book rooms, hire taxis, and order utilities.',
      technologies: 'React.js, Express.js, PostgreSQL',
      link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Resort_web', // Replace with your actual project link
      image: resortManagementImage, // Use the imported image
    },
    {
      title: 'ICU Admission Prediction',
      description: 'Built a project that predicts ICU admission of pediatric respiratory illness patients using machine learning algorithms.',
      technologies: 'Machine Learning, Python, TensorFlow',
      link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Ml_projects/ICUadmissionPredictor', // Placeholder if not live yet
      image: icuAdmissionImage, // Use the imported image
    },
    {
        title: 'Secure Text Drive',
        description: 'Currently working on a project that predicts ICU admission of pediatric respiratory illness patients using machine learning algorithms.',
        technologies: 'Machine Learning, Python, TensorFlow',
        link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Ml_projects/ICUadmissionPredictor', // Placeholder if not live yet
        image: icuAdmissionImage, // Use the imported image
      },
      {
        title: 'Beta Medical Service ',
        description: 'Currently working on a project that predicts ICU admission of pediatric respiratory illness patients using machine learning algorithms.',
        technologies: 'Machine Learning, Python, TensorFlow',
        link: 'https://github.com/srirama2004/SriHomeRepo/tree/main/Projects_sri/Ml_projects/ICUadmissionPredictor', // Placeholder if not live yet
        image: icuAdmissionImage, // Use the imported image
      },
  ];

  return (
    <div className="parent-container">
      {/* 3D Carousel Section */}
      <div className="carousel-container">
        <div className="carousel">
        <div className="carousel">
  {projects.map((project, index) => (
    <div className="card-container" key={index}>
      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="card-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</div>
</div>
  );
};

export default Projects;
