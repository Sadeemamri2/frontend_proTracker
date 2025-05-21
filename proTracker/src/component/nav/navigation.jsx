import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css'; // (اختياري لو عندك تصميم منفصل)

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">الرئيسية</Link>
      <span style={{ margin: '0 10px' }}>|</span>
      <Link to="/about">عن النظام</Link>
    </nav>
  );
}

export default NavBar;
