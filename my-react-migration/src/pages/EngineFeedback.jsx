import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';
import { validateFile, formatFileSize, getFileIcon, MAX_FILE_SIZE_2MB, ALLOWED_FILE_TYPES } from '../utils/fileHandler';

export default function EngineFeedback() {
  const { engine } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    likedMost: '',
    feedback: ''
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    navigate('/thank-you');
  };

  return (
    <>
      <Header />
      
      <section className="about" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <h2 className="section-title">Share Your {engine?.charAt(0).toUpperCase() + engine?.slice(1)} Feedback</h2>
          <p className="section-description">
            Help us improve our search engine comparison with your insights
          </p>

          <div className="about-card" style={{ 
            maxWidth: '700px', 
            margin: '0 auto', 
            padding: '40px',
            backgroundColor: 'var(--bg-light)',
            borderLeft: '4px solid var(--primary-color)'
          }}>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-dark)' }}>
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'var(--bg-darker)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    color: 'var(--text-dark)',
                    fontSize: '14px',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              {/* Email Field */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-dark)' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'var(--bg-darker)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    color: 'var(--text-dark)',
                    fontSize: '14px',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              {/* Rating Field */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600', color: 'var(--text-dark)' }}>
                  How would you rate {engine}?
                </label>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['excellent', 'good', 'average', 'poor'].map((option) => (
                    <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                      <input 
                        type="radio" 
                        name="rating" 
                        value={option}
                        onChange={handleChange}
                        required
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                      />
                      <span style={{ 
                        color: formData.rating === option ? 'var(--primary-color)' : 'var(--text-light)',
                        fontWeight: formData.rating === option ? '600' : 'normal'
                      }}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Liked Most Field */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-dark)' }}>
                  What did you like most about {engine}?
                </label>
                <input 
                  type="text" 
                  name="likedMost"
                  placeholder="Features, speed, accuracy, results, etc."
                  value={formData.likedMost}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'var(--bg-darker)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    color: 'var(--text-dark)',
                    fontSize: '14px'
                  }}
                />
              </div>

              {/* Feedback Textarea */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-dark)' }}>
                  Your Detailed Feedback
                </label>
                <textarea
                  name="feedback"
                  rows="5"
                  placeholder="Share your thoughts, suggestions, or concerns..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-darker)',
                    color: 'var(--text-dark)',
                    fontSize: '14px',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* File Upload Field */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-dark)' }}>
                  Attach Screenshot or Document (Optional)
                </label>
                <div style={{
                  padding: '20px',
                  border: '2px dashed var(--primary-color)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-darker)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept="image/*,.pdf,.doc,.docx"
                    style={{ display: 'none' }}
                    id="fileInput"
                  />
                  <label htmlFor="fileInput" style={{ cursor: 'pointer', display: 'block' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>📁</div>
                    <div style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                      Click to upload or drag & drop
                    </div>
                    <div style={{ color: 'var(--text-light)', fontSize: '12px', marginTop: '4px' }}>
                      PNG, JPG, GIF, PDF (Max 2MB)
                    </div>
                  </label>
                </div>
                
                {fileError && (
                  <div style={{ 
                    marginTop: '12px', 
                    padding: '12px',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}>
                    ❌ {fileError}
                  </div>
                )}

                {uploadedFile && (
                  <div style={{
                    marginTop: '12px',
                    padding: '12px',
                    backgroundColor: 'var(--bg-darker)',
                    border: '1px solid var(--primary-color)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{ fontSize: '20px' }}>{uploadedFile.icon}</span>
                    <div>
                      <div style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '14px' }}>
                        {uploadedFile.name}
                      </div>
                      <div style={{ color: 'var(--text-light)', fontSize: '12px' }}>
                        {uploadedFile.size}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setUploadedFile(null);
                        document.getElementById('fileInput').value = '';
                      }}
                      style={{
                        marginLeft: 'auto',
                        background: 'none',
                        border: 'none',
                        color: '#ff6b6b',
                        cursor: 'pointer',
                        fontSize: '18px'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <button 
                  type="submit" 
                  style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '14px 40px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-dark)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
