import React from 'react';
import { SinglePost } from './SinglePost';

export const PostsComponent = ({ posts,onDelete }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <SinglePost key={index} post={post} onDelete={onDelete}/>
      ))}
    </div>
  );
};




