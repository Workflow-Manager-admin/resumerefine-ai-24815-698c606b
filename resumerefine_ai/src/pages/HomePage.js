import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

// PUBLIC_INTERFACE
const HomePage = () => {
  const navigate = useNavigate();

  // Pexels: AI/tech/career theme, free for use:
  // https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg
  // alt: https://images.pexels.com/photos/1181675/pexels-photo-1181675?auto=compress&w=1600&q=80
  return (
    <section
      className="rr-home-bg"
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          "linear-gradient(110deg, rgba(26,35,126,0.82) 66%, rgba(255,111,0,0.48) 150%), url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=1500&q=80') center/cover no-repeat",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Top-right Sign-In button for Home Page only */}
      <button
        className="btn btn-large rr-signin-top"
        onClick={() => navigate('/signin')}
        aria-label="Sign In"
        type="button"
      >
        Sign In
      </button>

      <div className="container rr-home-content">
        <div
          style={{
            background: 'rgba(255,255,255,0.96)',
            borderRadius: 18,
            padding: '50px 32px 40px 32px',
            boxShadow: '0 10px 48px rgba(26,35,126,0.14)',
            maxWidth: 430,
            margin: '96px auto',
            backdropFilter: 'blur(0.5px)'
          }}
        >
          <div
            className="logo rr-logo"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: "2.1rem",
              fontWeight: 800,
              color: "var(--primary-color, #1A237E)",
              textShadow: "0 2px 14px rgba(26,35,126,0.08)"
            }}
          >
            <span
              className="rr-logo-symbol"
              style={{
                color: 'var(--accent-color, #FF6F00)',
                fontWeight: 900,
                textShadow: "0 1px 10px rgba(255,111,0,0.07)"
              }}
            >
              rrAI
            </span>
            ResumeRefine
          </div>
          <h2
            style={{
              margin: '18px 0 8px 0',
              color: 'var(--primary-color, #1A237E)',
              fontWeight: 700,
            }}
          >
            Smarter, AI-powered Resume Reviews
          </h2>
          <div
            style={{
              fontSize: 18,
              color: '#606480',
              marginBottom: 30,
              textShadow: "0 1px 1px rgba(26,35,126,0.06)"
            }}
          >
            Refine your resume for your dream job with instant, actionable suggestions tailored to your target role.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
