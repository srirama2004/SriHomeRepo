// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Skills from './components/Skills'; // Assuming you have a Skills component
import Contact from './components/Contact'; // Assuming you have a Contact component
import Project from './components/projects'; // Assuming you have a Contact component
import ExEdu from './components/exedu'; // Assuming you have a Contact component
import Expe from './components/expe'; // Assuming you have a Contact component
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Welcome />} /> {/* Use element prop */}
          <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/exedu" element={<ExEdu />} />
        <Route path="/expe" element={<Expe />} />
        </Routes>
        </Router>

    </div>
  );
};

export default App;
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Welcome from './components/Welcome';
// import Skills from './components/Skills'; // Assuming you have a Skills component
// import Contact from './components/Contact'; // Assuming you have a Contact component
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes> {/* Replace Switch with Routes */}
//           <Route path="/" element={<Welcome />} /> {/* Use element prop */}
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* Add additional routes here as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

//export default App;
