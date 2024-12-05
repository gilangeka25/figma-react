import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-page">
    <nav className="navbar">
      <img className="logo" src="/assets/img/logo.png" alt="Logo" />
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Settings</a></li>
        <li><a className="active" href="/login">Login</a></li>
      </ul>
    </nav>


      <div className="center">
        <h1>Welcome To Projeck</h1>
        <h2>HTML CSS JS</h2>
        <div className="buttons">
          <button className="btn2" onClick={() => alert('Back to Main!')}>Back</button>
          <button className="btn2" onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
