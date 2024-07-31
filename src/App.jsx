/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
