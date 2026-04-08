import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../style.css';

export default function Header() {
  const location = useLocation();
  const [userName, setUserName] = useState('');
  //HOOKS CONCEPT: useEffect to update username on route change
  useEffect(() => {
    // Get username from localStorage
    const storedName = localStorage.getItem('username') || localStorage.getItem('fullName');
    setUserName(storedName);
  }, [location]);

  const isLandingPage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>SearchExplorer</h2>
        </div>
        <nav className="nav">
          {isLandingPage ? (
            <>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <Link to="/login" className="btn-login">Login</Link>
            </>
          ) : !isLoginPage ? (
            <>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                👤 {userName ? userName : 'User Account'}
              </span>
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
