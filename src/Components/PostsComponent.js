import React from 'react';
import { SinglePost } from './SinglePost';

export const PostsComponent = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <SinglePost key={index} post={post} />
      ))}
    </div>
  );
};




