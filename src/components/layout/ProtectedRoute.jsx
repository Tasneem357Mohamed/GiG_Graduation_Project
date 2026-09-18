import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center dark:bg-[#0B0F19] dark:text-white">Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
