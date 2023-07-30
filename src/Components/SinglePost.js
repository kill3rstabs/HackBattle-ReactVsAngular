import React from 'react';
import "./SinglePost.css"
export const SinglePost = ({ post,onDelete }) => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center">
              <img
                  src={post.userPhoto}
                  alt={post.username}
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <h3 className="card-title">@{post.username}</h3>
              </div>
                
              <button className="btn btn-danger"onClick={()=>{onDelete(todo)}}>Delete</button>
              </div>
              <p className="mx-6 mt-1 font-semibold text-xl">{post.msg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
