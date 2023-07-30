import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert('Logged in successfully!');
      navigate('/frontpage'); // Redirect to the front page upon successful login
    } else {
      // Create a new user and store in localStorage
      const newUser = {
        username,
        password,
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('New user created!');
    }
  };

  return (
    <div className="body">
      <div className="login">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <div className="empty"></div>
            </div>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Log In"
              />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
