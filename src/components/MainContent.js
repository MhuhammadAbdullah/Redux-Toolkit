// src/components/MainContent.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const MainContent = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) dispatch(login({ username }));
  };

  return (
    <main>
      {!user ? (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <h2>Dashboard</h2>
      )}
    </main>
  );
};

export default MainContent;
