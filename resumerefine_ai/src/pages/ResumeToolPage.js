// PUBLIC_INTERFACE
import React, { useState } from 'react';
import './ResumeToolPage.css';

// Unsplash full-res, professional, modern, subtle tech abstract (free to use):
// https://images.unsplash.com/photo-1465101178521-c8cddf64cfd6?auto=format&fit=crop&w=1600&q=80
// License: Unsplash, free for commercial, no attribution

// PUBLIC_INTERFACE
const ResumeToolPage = () => {
  const [form, setForm] = useState({
    name: '',
    role: '',
    file: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [aiResults, setAiResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const jobRoles = [
    "Software Engineer", "Data Scientist", "Product Manager", "Designer", "Marketing Manager", "Other"
  ];

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev =>
      name === "file" ?
        { ...prev, file: files[0] } :
        { ...prev, [name]: value }
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);
    // Simulate AI analysis, fake delay & fake output
    setTimeout(() => {
      setAiResults({
        highlights: [
          "✔️ Clear, concise summary section.",
          "✔️ Quantified achievements in work experience.",
        ],
        improvements: [
          "• Add more job-specific keywords for ATS optimization.",
          "• Refine formatting for better readability.",
          "• Expand on technical skills in relevant tools.",
        ]
      });
      setLoading(false);
    }, 1400);
  };

  return (
    <section className="rr-resume-bg">
      <div className="container" style={{ maxWidth: 520 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 6px 36px rgba(26,35,126,0.09)',
            padding: "36px 26px 30px",
            marginBottom: 28,
            marginTop: 108
          }}
        >
          <h3 style={{ color: 'var(--primary-color, #1A237E)', marginBottom: 18, fontWeight: 700 }}>Resume Analysis</h3>
          <label style={{ fontWeight: 500, fontSize: 15, display: "block", marginBottom: 6 }}>
            Name
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              style={{
                margin: "7px 0 16px 0",
                padding: "10px 12px",
                borderRadius: 5,
                border: "1px solid #C1C4E2",
                width: "100%",
                fontSize: "1rem"
              }}
            />
          </label>
          <label style={{ fontWeight: 500, fontSize: 15, display: "block", marginBottom: 6 }}>
            Target Job Role
            <select
              name="role"
              required
              value={form.role}
              onChange={handleChange}
              style={{
                margin: "7px 0 16px 0",
                padding: "10px 12px",
                borderRadius: 5,
                border: "1px solid #C1C4E2",
                width: "100%",
                fontSize: "1rem",
                color: form.role ? '#23285A' : '#888'
              }}
            >
              <option value="" disabled>Select a job role...</option>
              {jobRoles.map(role =>
                <option value={role} key={role}>{role}</option>)}
            </select>
          </label>
          <label style={{ fontWeight: 500, fontSize: 15, display: "block", marginBottom: 6 }}>
            Resume (PDF)
            <input
              name="file"
              type="file"
              required
              accept=".pdf"
              style={{
                display: "block",
                margin: "7px 0 16px 0",
                width: "100%",
                background: "none",
                color: "#3B3F77"
              }}
              onChange={handleChange}
            />
          </label>
          <button
            className="btn btn-large"
            style={{
              backgroundColor: 'var(--accent-color, #FF6F00)',
              color: 'white',
              width: "100%",
              marginTop: 12,
              fontWeight: 600,
              fontSize: "1.09rem"
            }}
            type="submit"
            disabled={loading || !form.file || !form.role || !form.name}
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
          {submitted && !loading && aiResults && (
            <div style={{ marginTop: 16, color: "green", fontWeight: 500 }}>
              Analysis complete! Scroll down for results.
            </div>
          )}
        </form>
        {aiResults && (
          <section style={{
            background: '#fff',
            borderRadius: 10,
            boxShadow: '0 1px 8px rgba(26,35,126,0.07)',
            padding: '23px 18px 8px',
            marginBottom: 32
          }}>
            <h4 style={{ color: "var(--primary-color, #1A237E)", marginTop: 0, fontWeight: 600, letterSpacing: "-0.5px" }}>AI Suggestions</h4>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontWeight: 700, color: "#43A047" }}>Highlights:</span>
              <ul style={{ margin: "8px 0 14px 20px", color: "#23285A" }}>
                {aiResults.highlights.map((h, i) =>
                  <li key={i}>{h}</li>
                )}
              </ul>
              <span style={{ fontWeight: 700, color: "#FF5722" }}>Areas for Improvement:</span>
              <ul style={{ margin: "8px 0 12px 20px", color: "#23285A" }}>
                {aiResults.improvements.map((h, i) =>
                  <li key={i}>{h}</li>
                )}
              </ul>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default ResumeToolPage;
