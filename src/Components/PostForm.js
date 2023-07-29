import React from 'react';

export const PostForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4">Create a New Post</h3>
              <form onSubmit={submit}>
                
                <div className="mb-3">
                  <label htmlFor="postContent" className="form-label">Post Content</label>
                  <textarea className="form-control" id="postContent" rows="5" placeholder="Enter post content"></textarea>
                </div>
                
                
                <div className="mb-3">
                  <label htmlFor="postImage" className="form-label">Post Image</label>
                  <input type="file" className="form-control" id="postImage" />
                </div>
                <button type="submit" className="btn btn-primary">Submit Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


