import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      
      <div className="login-page">
        <div className="login-visual">
          <div className="visual-content">
            <h2>Password Recovery</h2>
            <p>
              Enter your registered email address and we'll send you
              instructions to reset your password securely.
            </p>
            <ul className="benefits-list">
              <li>✓ Secure verification</li>
              <li>✓ Email-based recovery</li>
              <li>✓ Quick and simple process</li>
            </ul>
          </div>
        </div>

        <div className="login-container">
          <div className="login-header">
            <Link to="/login" className="back-link">← Back to Login</Link>
            <h1>Forgot Password</h1>
            <p>Reset your account password</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Send Reset Link
            </button>

            <p className="signup-link" style={{ marginTop: '20px' }}>
              Remembered your password?
              <Link to="/login"> Login here</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
