import React, { useState } from 'react';

export const TweetForm = () => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="bg-white border-red-400 border-2 max-w-md h-72 mx-auto my-10 rounded-xl flex flex-col justify-between">
      <textarea
        className="mx-6 mt-7 mb-2 text-lg outline-gray-400 rounded-md border-red-400 font-thin"
        name=""
        placeholder="What's happening?"
        id=""
        cols="50"
        rows="5"
        value={tweet}
        onChange={(event) => setTweet(event.target.value)}
      ></textarea>
      <p className="ml-6 mb-3 font-semibold text-red-600">Everyone can reply</p>
      <hr className="border-stone-500 my-3 mx-7" />
      <button className="p-2 text-white bg-red-600 ml-auto mr-4 w-16 rounded-3xl font-semibold text-lg cursor-pointer hover:bg-red-300 my-5">
        Post
      </button>
    </div>
  );
};

