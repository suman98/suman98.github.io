// src/Router.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/index';
import MySpec from '@/pages/spec/index'
import PlayGround from '@/pages/play';
import HangManGame from '@/pages/games/hangman/index'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/play" element={<PlayGround />} />
        <Route path="/spec" element={<MySpec />} />
        <Route path="/hangman" element={<HangManGame />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
