import React from 'react';
import { SinglePost } from './SinglePost';

export const P = ({ posts }) => { // Change 'post' prop to 'posts'
  return (
    <div>
      {posts.map((post, index) => ( // Use map function on 'posts' array and add curly braces to wrap JSX content
        <SinglePost key={index} post={post} /> // Add 'key' prop to each element in the array
      ))}
    </div>
  );
};



