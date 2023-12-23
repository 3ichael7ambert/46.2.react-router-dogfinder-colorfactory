import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';
import './ColorFactoryApp.css';

const ColorFactoryApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorsList />} />
        <Route path="/colors/new" element={<NewColorForm />} />
        <Route path="/colors/:color" element={<ColorDetail />} />
        <Route path="/*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
};

export default ColorFactoryApp;
