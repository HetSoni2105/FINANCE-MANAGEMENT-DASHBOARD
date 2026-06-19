// components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>; // verifying token, avoid flash redirect
  return user ? <Outlet/> : <Navigate to="/login" />;
}