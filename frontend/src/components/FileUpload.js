import React, { useState } from 'react';
import axios from 'axios';
import '../css/FileUpload.css';

const API = 'http://localhost:5000/api';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const token = localStorage.getItem('token');

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);  // Check the file object
  
    const res = await axios.post(`${API}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    });
  
    alert('Uploaded to: ' + res.data.url);
  };
    
  return (
    <div className="file-upload-container">
      <h3>Upload File</h3>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUpload;