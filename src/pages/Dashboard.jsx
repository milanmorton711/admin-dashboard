import React from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import Overview from './Overview';
import Users from './Users';
import Settings from './Settings';
import Tickets from './Tickets';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <nav className="space-y-6">
          <Link to="/overview" className="block text-white hover:underline">Overview</Link>
          <Link to="/users" className="block text-white hover:underline">Users</Link>
          <Link to="/settings" className="block text-white hover:underline">Settings</Link>
          <Link to="/tickets" className="block text-white hover:underline">Tickets</Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </main>
    </div>
  );
}
