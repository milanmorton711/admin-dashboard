import React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Tickets from './pages/Tickets';
import LoginPage from './pages/LoginPage';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = localStorage.getItem('auth') === 'true';
  return isAuth ? children : <Navigate to="/login" replace state={{ from: location }} />;
};

export default function App() {
  const isAuth = localStorage.getItem('auth') === 'true';

  return (
    <div className="flex h-screen">
      {isAuth && (
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <ul className="space-y-4">
            <li><Link to="/overview" className="hover:text-gray-300">Overview</Link></li>
            <li><Link to="/users" className="hover:text-gray-300">Users</Link></li>
            <li><Link to="/settings" className="hover:text-gray-300">Settings</Link></li>
            <li><Link to="/tickets" className="hover:text-gray-300">Tickets</Link></li>
          </ul>
        </aside>
      )}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/overview" />} />
          <Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
          <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/tickets" element={<ProtectedRoute><Tickets /></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  );
}
