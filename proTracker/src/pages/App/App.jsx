import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Home/index';
import AboutPage from '../About/index';
import NavBar from '../../component/nav/navigation';
import ProjectsPage from '../ProjectsPage/index';

function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

    </>
  );
}

export default App;