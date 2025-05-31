import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import ResumeToolPage from './pages/ResumeToolPage';

// PUBLIC_INTERFACE
function App() {
  // Navbar should be hidden on Home (for clean landing!), show elsewhere
  function NavbarWrapper() {
    const location = useLocation();
    const hideNavbar = location.pathname === '/';
    return hideNavbar ? null : <MainNavbar />;
  }
  return (
    <Router>
      <div className="app light-theme">
        <NavbarWrapper />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/resume" element={<ResumeToolPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;