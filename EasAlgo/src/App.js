import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import HomePage from './components/Home'; // Ensure the correct path
import CardPage from './components/Cardpage'; // Ensure the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:cardId" element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
