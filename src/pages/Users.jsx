// src/pages/Users.jsx
import React from 'react';

const mockUsers = [
  { id: 1, name: 'Alice Johnson', role: 'Admin' },
  { id: 2, name: 'Ben Carter', role: 'Technician' },
  { id: 3, name: 'Samantha Lee', role: 'Support' }
];

const Users = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Team Members</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
