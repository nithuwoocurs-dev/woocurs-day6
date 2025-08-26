import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';

function App() {
  return (
    <>
      {/* Simple Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Woocurs Web</Link>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/registration">Registration</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
