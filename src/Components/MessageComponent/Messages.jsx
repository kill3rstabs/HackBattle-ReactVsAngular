import React from 'react';
import './Messages.css';
import { MessageComp } from './MessageComp';
import { SendMessage } from './SendMessage';

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
        <SendMessage/>
      </div>
    </div>
  );
}

