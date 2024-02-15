import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PrivateRoute = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      await axios
        .get("http://localhost:6001/check-auth", { withCredentials: true })
        .then((response) => {
          setIsAuthenticated(response.data.isAuthenticated);
        });
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null; // or a loading spinner
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
