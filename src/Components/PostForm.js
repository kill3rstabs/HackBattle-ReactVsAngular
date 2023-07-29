import React, { useState } from 'react';

export const PostForm = ({ addPosts }) => {
  const [msg, setMsg] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!msg) {
      alert("Post cannot be blank");
    } else {
      addPosts(msg);
      setMsg("");
    }
  };

  return (
    <div className="bg-white border-red-400 border-2 max-w-md mx-auto my-10 rounded-xl shadow-md">
      <form className="p-6" onSubmit={handleSubmit}>
        <textarea
          className="w-full py-3 px-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-600"
          name=""
          placeholder="What's happening?"
          id=""
          cols="30"
          rows="4"
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
        ></textarea>
        <p className="ml-2 mt-2 text-sm text-gray-600">Everyone can reply</p>
        <hr className="border-gray-300 my-3" />
        <button
          type="submit"
          className="px-4 py-2 ml-80 mr-10 text-white bg-red-600 rounded-3xl font-semibold text-lg cursor-pointer hover:bg-red-500 focus:outline-none"
        >
          Post
        </button>
      </form>
    </div>
  );
};


