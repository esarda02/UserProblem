import React, { useState } from 'react';
import api from '../services/api';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.delete(`api/users/${userId}/`);
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delete User</h2>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </div>
      <button type="submit">Delete User</button>
    </form>
  );
};

export default DeleteUser;
