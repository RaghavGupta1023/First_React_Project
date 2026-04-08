import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../stylesheet.css';
import { setLoginStatus, setCookie } from '../utils/cookies';
import { validateEmail, validatePassword } from '../utils/validation';
import { validateFile, formatFileSize, getFileIcon, MAX_FILE_SIZE_2MB, ALLOWED_FILE_TYPES } from '../utils/fileHandler';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.trim().length < 2) {
      newErrors.username = 'Username must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileError('');

    if (file) {
      const validation = validateFile(file, ALLOWED_FILE_TYPES.all, MAX_FILE_SIZE_2MB);
      if (!validation.valid) {
        setFileError(validation.errors.join(', '));
        setUploadedFile(null);
      } else {
        setUploadedFile({
          name: file.name,
          size: formatFileSize(file.size),
          type: file.type,
          icon: getFileIcon(file.type)
        });
      }
    }
  };
//Form submission Concept
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save user info and set login status
    localStorage.setItem('username', formData.username);
    localStorage.setItem('email', formData.email);
    setCookie('username', formData.username, 7);
    setCookie('email', formData.email, 7);
    setLoginStatus(true);
    navigate('/engine-selection');
  };

  return (
    <div className="login-page-body">
      <div className="page-wrapper">
        <header className="top-bar">
          <div className="back-to-home">
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
          <div className="logo-container">
            <div className="logo-icon"></div>
            <span className="logo-text">SearchHub</span>
          </div>
        </header>

        <main className="main-container">
          <div className="login-card">
            <div className="login-left">
              <div className="visual-overlay"></div>
              <div className="visual-content">
                <h2>Welcome Back</h2>
                <p>Access the world's most powerful search engine collection in one place.</p>
              </div>
            </div>
            <div className="login-right">
              <div className="form-container">
                <h1 className="form-title">LOGIN</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>User Name</label>
                      <input 
                        type="text" 
                        name="username"
                        placeholder="Enter your name" 
                        value={formData.username}
                        onChange={handleChange}
                      />
                      {errors.username && <span style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '4px' }}>❌ {errors.username}</span>}
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="name@gmail.com" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '4px' }}>❌ {errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="••••••••" 
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} //event handling concept
                        style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '18px'
                        }}
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                    {errors.password && <span style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '4px' }}>❌ {errors.password}</span>}
                  </div>

                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                      Attach Document (Optional - Max 2MB)
                    </label>
                    <div style={{
                      padding: '16px',
                      border: '2px dashed rgba(168, 85, 247, 0.5)',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept="image/*,.pdf,.doc,.docx"
                        style={{ display: 'none' }}
                        id="fileInputLogin"
                      />
                      <label htmlFor="fileInputLogin" style={{ cursor: 'pointer', display: 'block' }}>
                        <div style={{ fontSize: '18px', marginBottom: '6px' }}>📁</div>
                        <div style={{ color: '#e9e9e9', fontSize: '13px', fontWeight: '500' }}>
                          Click to upload file
                        </div>
                        <div style={{ color: '#a0a0a0', fontSize: '11px', marginTop: '4px' }}>
                          PNG, JPG, GIF, PDF (Max 2MB)
                        </div>
                      </label>
                    </div>
                    
                    {fileError && (
                      <div style={{ 
                        marginTop: '10px', 
                        padding: '10px',
                        backgroundColor: '#ff6b6b',
                        color: 'white',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}>
                        ❌ {fileError}
                      </div>
                    )}

                    {uploadedFile && (
                      <div style={{
                        marginTop: '10px',
                        padding: '10px',
                        backgroundColor: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.5)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ fontSize: '16px' }}>{uploadedFile.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ color: '#e9e9e9', fontWeight: '600', fontSize: '12px' }}>
                            {uploadedFile.name}
                          </div>
                          <div style={{ color: '#a0a0a0', fontSize: '11px' }}>
                            {uploadedFile.size}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setUploadedFile(null);
                            document.getElementById('fileInputLogin').value = '';
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#ff6b6b',
                            cursor: 'pointer',
                            fontSize: '16px'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="button-row">
                    <button type="submit" className="btn-gradient">Enter</button>
                  </div>
                  <div className="links-row">
                    <Link to="/forgot-password">Forgot password</Link>
                    <Link to="/signup">New User? Create Account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer-bar">
          <div className="contact-info">
            <span>contact@searchhub.com</span>
          </div>
          <div className="social-icons">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
