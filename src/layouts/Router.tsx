// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/index';
import PlayGround from '@/pages/play';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<PlayGround />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
