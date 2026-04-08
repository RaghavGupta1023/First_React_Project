// File handling utilities

export const ALLOWED_FILE_TYPES = {
  image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  all: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf']
};

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_FILE_SIZE_2MB = 2 * 1024 * 1024; // 2MB

export function validateFile(file, allowedTypes = ALLOWED_FILE_TYPES.all, maxSize = MAX_FILE_SIZE) {
  const errors = [];

  if (!file) {
    errors.push('No file selected');
    return { valid: false, errors };
  }

  if (file.size > maxSize) {
    errors.push(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
  }

  if (!allowedTypes.includes(file.type)) {
    errors.push('File type not allowed');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export function getFileIcon(fileType) {
  if (fileType.startsWith('image/')) return '🖼️';
  if (fileType === 'application/pdf') return '📄';
  if (fileType.includes('word')) return '📝';
  return '📎';
}
//OOPS Concept
export function saveFileMetadata(fileName, fileSize, fileType) {
  const fileData = {
    name: fileName,
    size: fileSize,
    type: fileType,
    uploadedAt: new Date().toISOString()
  };
  localStorage.setItem('uploadedFile', JSON.stringify(fileData));
  return fileData;
}
//OOPS Concept
export function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
//OOPS Concept
export function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}
