import React, { useState, useRef } from 'react';

const ResumeManager = () => {
  const [currentResume, setCurrentResume] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file) => {
    // Validate file type
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file only.');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB.');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const uploadSimulation = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadSimulation);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Set the current resume
      const newResume = {
        name: file.name,
        uploadDate: new Date().toISOString(),
        size: formatFileSize(file.size),
        url: URL.createObjectURL(file) // In real app, this would be the server URL
      };

      setCurrentResume(newResume);
      setIsUploading(false);
      setUploadProgress(0);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      alert('Resume uploaded successfully!');
    } catch (error) {
      setIsUploading(false);
      setUploadProgress(0);
      alert('Upload failed. Please try again.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleDownload = () => {
    if (!currentResume) return;
    
    try {
      const link = document.createElement('a');
      link.href = currentResume.url;
      link.download = currentResume.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert('Download failed. Please try again.');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      setCurrentResume(null);
    }
  };

  return (
    <div className="resume-manager">
      <div className="resume-header">
        <h1>Resume Management</h1>
        <div className="resume-stats">
          {currentResume ? (
            <>
              <span className="stat">📄 Current Resume: {currentResume.name}</span>
              <span className="stat">📅 Uploaded: {formatDate(currentResume.uploadDate)}</span>
              <span className="stat">📊 Size: {currentResume.size}</span>
            </>
          ) : (
            <span className="stat">No resume uploaded yet</span>
          )}
        </div>
      </div>

      <div className="resume-content">
        {/* Upload Section */}
        <div className="upload-section" data-aos="fade-up">
          <h2>{currentResume ? 'Replace Resume' : 'Upload Resume'}</h2>
          <div 
            className={`upload-area ${dragOver ? 'drag-over' : ''} ${isUploading ? 'uploading' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !isUploading && fileInputRef.current.click()}
          >
            {isUploading ? (
              <div className="upload-progress">
                <div className="progress-circle">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${uploadProgress}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="progress-text">{uploadProgress}%</span>
                </div>
                <p>Uploading resume...</p>
              </div>
            ) : (
              <div className="upload-content">
                <div className="upload-icon">📄</div>
                <h3>Drop your PDF resume here</h3>
                <p>or click to browse files</p>
                <span className="upload-note">PDF files only, max 5MB</span>
                {currentResume && (
                  <span className="current-file">Current: {currentResume.name}</span>
                )}
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* Current Resume Display */}
        {currentResume && (
          <div className="current-resume-section" data-aos="fade-up" data-aos-delay="200">
            <div className="section-header">
              <h2>Current Resume</h2>
              <div className="resume-actions">
                <button 
                  className="action-btn download-btn"
                  onClick={handleDownload}
                >
                  📥 Download
                </button>
                <button 
                  className="action-btn delete-btn"
                  onClick={handleDelete}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
            
            <div className="resume-display">
              <div className="resume-info">
                <div className="file-icon">📄</div>
                <div className="file-details">
                  <h3>{currentResume.name}</h3>
                  <div className="file-meta">
                    <span>📊 {currentResume.size}</span>
                    <span>📅 {formatDate(currentResume.uploadDate)}</span>
                  </div>
                </div>
              </div>
              
              <div className="pdf-viewer">
                <iframe
                  src={currentResume.url}
                  width="100%"
                  height="600px"
                  style={{ border: 'none', borderRadius: '0.75rem' }}
                  title={`Preview of ${currentResume.name}`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeManager;
