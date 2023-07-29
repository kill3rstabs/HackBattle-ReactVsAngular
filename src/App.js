import logo from './logo.svg';
import './App.css';
import { Header } from "./Components/Header";
import { PostForm } from "./Components/PostForm";
import { SidePanel } from "./Components/SidePanel";
import { PostsComponent } from './Components/PostsComponent';
import React, { useState, useEffect } from 'react';
import { Login } from './Components/LoginComponents/Login';
function App() {
  const [posts, setPosts] = useState([]);
  const addPosts = (msg) => {
    console.log("I am adding this Post", posts)
    let sno;
    if (posts.length === 0) {
      sno = 0;
    }
    else {
      sno = posts[posts.length - 1].sno + 1;
    }
    const myPosts = {
      sno: sno,
      msg : msg
    }
    setPosts([...posts, myPosts]);
    console.log(myPosts);
  }
  return (
    <div className="flex">
       <SidePanel />
      <div className="w-3/4 p-4">
        <Header />
        <PostForm addPosts = {addPosts}/>
        <PostsComponent posts = {posts}/>
      </div> 
     
     </div>
    // <>
    // <Header/>
    // <PostForm/>
    // </>
    // <>
    //  <Login/>
    //  </>
  );
}

export default App;