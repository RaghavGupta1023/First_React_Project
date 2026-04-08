// Form validation utilities

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  // At least 6 characters
  return password.length >= 6;
}

export function validatePasswordStrength(password) {
  const strength = {
    score: 0,
    feedback: ''
  };

  if (password.length >= 8) strength.score++;
  if (password.length >= 12) strength.score++;
  if (/[A-Z]/.test(password)) strength.score++;
  if (/[0-9]/.test(password)) strength.score++;
  if (/[!@#$%^&*]/.test(password)) strength.score++;

  if (strength.score === 0) strength.feedback = 'Very Weak';
  else if (strength.score === 1) strength.feedback = 'Weak';
  else if (strength.score === 2) strength.feedback = 'Fair';
  else if (strength.score === 3) strength.feedback = 'Good';
  else if (strength.score === 4) strength.feedback = 'Strong';
  else strength.feedback = 'Very Strong';

  return strength;
}

export function validatePhoneNumber(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

export function validateName(name) {
  return name.trim().length >= 2;
}

export function validateAge(age) {
  const numAge = parseInt(age);
  return numAge >= 13 && numAge <= 120;
}

// Format phone number
export function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
}

// Store form data locally
export function saveFormData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Retrieve form data locally
export function getFormData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Clear form data from local storage
export function clearFormData(key) {
  localStorage.removeItem(key);
}
