import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

// Unsplash tech security background (subtle, dark, professional, free, no attribution):
// https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80
// Alt keyword: modern-digital-city-abstract
// License: Unsplash free to use, no attribution required
// PUBLIC_INTERFACE
const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Mock auth: accepts anything non-empty
    setTimeout(() => {
      if (email && pass) {
        setStatus('idle');
        navigate('/resume');
      } else {
        setStatus('error');
      }
    }, 800);
  };

  return (
    <section className="rr-signin-bg">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 96 }}>
        <form
          onSubmit={handleSubmit}
          className="rr-signin-form"
        >
          <div className="rr-logo" style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 15, color: "var(--primary-color, #1A237E)"}}>
            <span style={{ color: "var(--accent-color, #FF6F00)" }}>rrAI</span> ResumeRefine
          </div>
          <h4 style={{ color: "#212253", fontWeight: 700, margin: "10px 0 18px" }}>Sign In</h4>
          <input
            type="email"
            autoFocus
            required
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "11px 12px",
              fontSize: "1rem",
              borderRadius: 5,
              border: "1px solid #C1C4E2",
              marginBottom: 16
            }}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            style={{
              width: "100%",
              padding: "11px 12px",
              fontSize: "1rem",
              borderRadius: 5,
              border: "1px solid #C1C4E2",
              marginBottom: 19
            }}
          />
          <button
            className="btn btn-large"
            style={{
              backgroundColor: 'var(--primary-color, #1A237E)',
              color: "white",
              width: "100%",
              marginBottom: 10
            }}
            disabled={status === 'loading'}
            type="submit"
          >
            {status === 'loading' ? 'Signing in...' : 'Sign In'}
          </button>
          {status === 'error' && (
            <div style={{ color: "#FF6F00", marginTop: 8, fontWeight: 500, fontSize: ".98rem" }}>
              Please enter your email and password.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
