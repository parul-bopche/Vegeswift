import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import your Auth context

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Assume useAuth() returns the current user

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;