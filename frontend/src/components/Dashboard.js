import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import FileUpload from '../components/FileUpload';
import PostList from '../components/PostList';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

const API = 'http://localhost:5000/api';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();  // Initialize useNavigate hook for navigation

  const fetchPosts = async () => {
    const res = await axios.get(`${API}/posts`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setPosts(res.data);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    navigate('/login');  // Redirect to Login page
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="post-form">
        <PostForm onPostCreated={fetchPosts} />
      </div>
      <div className="file-upload">
        <FileUpload />
      </div>
      <div className="post-list">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Dashboard;