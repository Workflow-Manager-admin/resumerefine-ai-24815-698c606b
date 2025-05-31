import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

// PUBLIC_INTERFACE
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section
      className="rr-home-bg"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 
          "linear-gradient(120deg, rgba(26,35,126,0.92) 68%,rgba(255,111,0,0.75) 150%), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="container rr-home-content">
        <div style={{
          background: 'rgba(255,255,255,0.93)',
          borderRadius: 18,
          padding: '50px 32px 40px 32px',
          boxShadow: '0 10px 48px rgba(26,35,126,0.14)',
          maxWidth: 430,
          margin: '96px auto'
        }}>
          <div className="logo rr-logo" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "2.1rem", fontWeight: 800, color: "var(--primary-color, #1A237E)" }}>
            <span className="rr-logo-symbol" style={{ color: 'var(--accent-color, #FF6F00)', fontWeight: 900 }}>rrAI</span> ResumeRefine
          </div>
          <h2 style={{ margin: '18px 0 8px 0', color: 'var(--primary-color, #1A237E)', fontWeight: 700 }}>Smarter, AI-powered Resume Reviews</h2>
          <div style={{ fontSize: 18, color: '#606480', marginBottom: 30 }}>Refine your resume for your dream job with instant, actionable suggestions tailored to your target role.</div>
          <button
            className="btn btn-large"
            style={{
              backgroundColor: 'var(--accent-color, #FF6F00)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
            onClick={() => navigate('/signin')}
          >
            Sign In to Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
