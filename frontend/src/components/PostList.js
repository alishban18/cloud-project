import React from 'react';
import '../css/PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list-container">
      <h3>Posts</h3>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong>: {p.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;