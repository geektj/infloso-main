import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCookie } from "../utills";
import { CookieName } from "../constants";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = getCookie(CookieName.AUTH_TOKEN);
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
