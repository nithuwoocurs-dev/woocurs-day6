import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Your Woocurs Web</h1>
      <p>Manage your data efficiently using our mobile app.</p>
      <div className="d-flex gap-2">
        <Link to="/registration" className="btn btn-primary">Register</Link>
        <Link to="/about" className="btn btn-outline-secondary">About</Link>
      </div>
    </div>
  );
}

export default Home;
