import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';
import { validateEmail, validatePassword, validatePasswordStrength, validateName, validateAge, saveFormData } from '../utils/validation';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    dob: ''
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Show password strength when typing password
    if (name === 'password' && value) {
      setPasswordStrength(validatePasswordStrength(value));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (!validateName(formData.fullName)) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.age && !validateAge(formData.age)) {
      newErrors.age = 'Age must be between 13 and 120';
    }

    return newErrors;
  };
//Form submission Concept
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save form data
    localStorage.setItem('fullName', formData.fullName);
    localStorage.setItem('email', formData.email);
    saveFormData('signupData', {
      fullName: formData.fullName,
      email: formData.email,
      age: formData.age,
      gender: formData.gender
    });

    navigate('/login');
  };

  const getStrengthColor = () => {
    if (!passwordStrength) return '#666';
    if (passwordStrength.score <= 1) return '#ff6b6b';
    if (passwordStrength.score === 2) return '#ffa94d';
    if (passwordStrength.score === 3) return '#ffd93d';
    return '#51cf66';
  };

  return (
    <div>
      <Header />
      <div className="login-page">
        <div className="login-container">
          <div className="login-header" style={{ textAlign: 'center' }}>
            <img src="/sign_up_image.png" alt="sign_up_image" className="left-section-picture" />
          </div>
        </div>

        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Enter full name" 
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span style={{ color: '#ff6b6b', fontSize: '13px' }}>❌ {errors.fullName}</span>}
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter email" 
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span style={{ color: '#ff6b6b', fontSize: '13px' }}>❌ {errors.email}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Password</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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
                {errors.password && <span style={{ color: '#ff6b6b', fontSize: '13px' }}>❌ {errors.password}</span>}
                {passwordStrength && (
                  <div style={{ marginTop: '8px', fontSize: '13px' }}>
                    <span style={{ color: getStrengthColor(), fontWeight: '600' }}>
                      Strength: {passwordStrength.feedback}
                    </span>
                    <div style={{ 
                      height: '4px', 
                      backgroundColor: '#2d2d3d', 
                      borderRadius: '2px', 
                      marginTop: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${(passwordStrength.score / 5) * 100}%`,
                        backgroundColor: getStrengthColor(),
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                )}
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Confirm Password</label>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <span style={{ color: '#ff6b6b', fontSize: '13px' }}>❌ {errors.confirmPassword}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Age</label>
                <input 
                  type="number" 
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  min="13"
                  max="120"
                />
                {errors.age && <span style={{ color: '#ff6b6b', fontSize: '13px' }}>❌ {errors.age}</span>}
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: 'var(--input-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    color: 'white'
                  }}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Date of Birth</label>
                <input 
                  type="date" 
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: 'var(--input-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    color: 'white'
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn-submit" style={{ marginTop: '24px' }}>
              Get Started
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
