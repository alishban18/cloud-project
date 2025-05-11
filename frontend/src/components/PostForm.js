import React, { useState } from 'react';
import axios from 'axios';
import '../css/PostForm.css';

const API = 'http://localhost:5000/api';

const PostForm = ({ onPostCreated }) => {
  const [form, setForm] = useState({ title: '', content: '' });
  const token = localStorage.getItem('token');

  const createPost = async () => {
    await axios.post(`${API}/posts`, form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setForm({ title: '', content: '' });
    onPostCreated();
  };

  return (
    <div className="post-form-container">
      <h3>Create Post</h3>
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={form.content}
        onChange={e => setForm({ ...form, content: e.target.value })}
      />
      <button onClick={createPost}>Create</button>
    </div>
  );
};

export default PostForm;