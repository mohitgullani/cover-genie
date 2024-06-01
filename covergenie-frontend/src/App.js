import React, { useState } from 'react';
import './App.css'; // Ensure you have this file for Tailwind CSS imports
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import CoverLetter from './components/CoverLetter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route path="/coverletter" element={<CoverLetter />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
