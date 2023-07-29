import React from 'react';


export const SinglePost = ({post}) => {
  return (
    <div className="bg-white max-w-xl h-80 mx-auto my-40 rounded-xl items-center justify-between shadow-gray-800 shadow-lg">
      <div className="flex">
        <div>
          <p className="mx-14 mt-5 font-bold text-red-700">Account</p>
          <p className="mx-14 relative bottom-1 text-sm font text-gray-600">@Username</p> 
        </div>
        <div className="flex justify-end items-end mx-64 mb-3 font-mono text-xl text-red-600">
          HopeHub
        </div>
      </div>
      <div>
        <p className="mx-6 mt-1 font-semibold text-xl">L{post.msg}</p>
        <p className="mx-6 top-9 relative text-gray-500 mt-2 text-sm">9:30pm - 5 Feb 2023</p>
        <div className="flex justify-evenly mr-8 mt-2">
          <button className=""><img className="w-12 relative left-3 top-10" src="Like.png" alt="" /></button>
          <button className=""><img className="w-12 relative left-3 top-10" src="Comment.png" alt="" /></button>
          <button className=""><img className="w-12 relative left-3 top-10" src="Share.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

