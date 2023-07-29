import React from 'react';

export const SinglePost = ({ post }) => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={post.userPhoto}
                  alt={post.username}
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <h3 className="card-title">@{post.username}</h3>
              </div>
              <p className="mx-6 mt-1 font-semibold text-xl">{post.msg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
