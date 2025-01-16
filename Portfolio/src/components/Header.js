// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import './Header.css';

// const Header = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li className="nav-item home">HOME</li>
//         <Link to="/"></Link>
//         <li className="nav-item skills">Skills</li>
//         <Link to="/skills"></Link>
//         <li className="nav-item contact">
//         <Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

//  export default Header;
// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import './Header.css';

// const Header = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li className="nav-item home">
//           <Link to="/">HOME</Link>
//         </li>
//         <li className="nav-item skills">
//           <Link to="/skills">Skills</Link>
//         </li>
//         <li className="nav-item contact">
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleSkillsClick = () => {
    navigate('/skills'); // Programmatically navigate to the Skills page
  };
  const handleContactClick = () => {
    navigate('/contact'); // Programmatically navigate to the Contact page
  };
  const handleHomeClick = () => {
    navigate('/'); // Programmatically navigate to the Skills page
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item home">
        <span onClick={handleHomeClick} style={{ cursor: 'pointer', color: '#ffffff' }}>
            Home
          </span>
        </li>
        <li className="nav-item skills">
          <span onClick={handleSkillsClick} style={{ cursor: 'pointer', color: '#ffffff' }}>
            Skills
          </span>
        </li>
        <li className="nav-item">
          {/* Opens resume.pdf directly when clicked */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            Resume
          </a>
        </li>
        <li className="nav-item contact">
          <span onClick={handleContactClick} style={{ cursor: 'pointer', color: '#ffffff' }}>
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
