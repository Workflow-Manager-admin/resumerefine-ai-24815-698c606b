import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MainNavbar.css';

// PUBLIC_INTERFACE
const MainNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar rr-navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="logo rr-logo" style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}>
          <span className="logo-symbol rr-logo-symbol">rrAI</span> 
          <span style={{ fontWeight: 600, color: 'var(--primary-color, #1A237E)' }}>
            ResumeRefine
          </span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {location.pathname !== '/' && (
            <button
              className="btn"
              onClick={() => navigate('/')}
              style={{ backgroundColor: 'var(--secondary-color, #F5F5F5)', color: 'var(--primary-color, #1A237E)' }}
            >
              Home
            </button>
          )}
          {location.pathname !== '/resume' && (
            <button
              className="btn"
              onClick={() => navigate('/resume')}
              style={{ backgroundColor: 'var(--primary-color, #1A237E)', color: 'white' }}
            >
              Resume Tool
            </button>
          )}
          {location.pathname !== '/signin' && (
            <button
              className="btn"
              onClick={() => navigate('/signin')}
              style={{ backgroundColor: 'var(--accent-color, #FF6F00)', color: 'white' }}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
