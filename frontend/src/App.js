import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import ModifyUser from './components/ModifyUser';
import DeleteUser from './components/DeleteUser';
import Login from './components/Login';

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/users">User List</Link></li>
            <li><Link to="/add-user">Add User</Link></li>
            <li><Link to="/modify-user">Modify User</Link></li>
            <li><Link to="/delete-user">Delete User</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/add-user" element={<AddUser/>} />
          <Route path="/modify-user" element={<ModifyUser/>} />
          <Route path="/delete-user" element={<DeleteUser/>} />
        </Routes>
      </div>
  );
}

export default App;
