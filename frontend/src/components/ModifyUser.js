import React, { useState } from 'react';
import api from '../services/api';

const ModifyUser = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.put(`api/users/${userId}/`, { username, password });
      alert('User modified successfully');
    } catch (error) {
      console.error('Error modifying user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modify User</h2>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Modify User</button>
    </form>
  );
};

export default ModifyUser;
