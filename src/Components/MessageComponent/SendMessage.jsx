import React from 'react'
import { MessageComp } from './MessageComp';

export const SendMessage = () => {
  return (
    <div className="col-9">
    {/* Chat area */}
    <div className="p-3 bg-white rounded shadow-sm">
      <h5>User 1</h5>
      <hr />
      {/* Message list */}
      <MessageComp/>
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
  )
}
