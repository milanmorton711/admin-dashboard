import Overview from "./Overview";
import Users from "./Users";
import Settings from "./Settings";
import Tickets from "./Tickets";
import Login from "./LoginPage";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = localStorage.getItem('auth') === 'true';
  return isAuth ? children : <Navigate to="/login" replace state={{ from: location }} />;
};

export default function App() {
  const isAuth = localStorage.getItem('auth') === 'true';

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 to-white">
      {isAuth && (
        <aside className="w-64 bg-white text-gray-800 p-6 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-blue-600">Help Desk Dashboard</h1>
          <nav className="space-y-4">
            <Link to="/overview" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition">Overview</Link>
            <Link to="/users" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition">Users</Link>
            <Link to="/settings" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition">Settings</Link>
            <Link to="/tickets" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-800 transition">Tickets</Link>
          </nav>
        </aside>
      )}

      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
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
