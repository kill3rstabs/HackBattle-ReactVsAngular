import React from 'react';
import './Messages.css';

export function Messages() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          {/* Sidebar */}
          <div className="p-3 bg-white rounded shadow-sm">
            <h5>Chats</h5>
            <hr />
            {/* List of chats */}
            <ul className="list-unstyled">
              <li className="my-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="rounded-circle me-2"
                />
                User 1
              </li>
              <li className="my-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="rounded-circle me-2"
                />
                User 2
              </li>
              {/* Add more users */}
            </ul>
          </div>
        </div>
        <div className="col-9">
          {/* Chat area */}
          <div className="p-3 bg-white rounded shadow-sm">
            <h5>User 1</h5>
            <hr />
            {/* Message list */}
            <div className="messages">
              {/* Example messages */}
              <div className="message sent">Hello!</div>
              <div className="message received">Hi there!</div>
              {/* Add more messages */}
            </div>
            {/* Message input */}
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                aria-label="Type your message..."
              />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

