/* -- libs -- */
import React, { useEffect } from 'react';

/* -- components -- */
import Post from './Post';

const Posts = ({ posts }) => {
  const renderPosts = () => {
    // TODO: extract loading logic to a seprate component
    if (!posts || !posts.length) return null;
    return (
      <div className="posts">
        {posts.map((post, key) => (
          <Post key={key} post={post} />
        ))}
      </div>
    );
  };
  return renderPosts();
};

export default Posts;
