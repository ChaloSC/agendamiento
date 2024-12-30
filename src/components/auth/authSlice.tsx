import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect them to the login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      navigate("/", { state: { from: location }, replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  // While the authentication check is in progress, you might want to show a loading indicator
  if (!isAuthenticated) {
    return (
      <>
        <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            No tienes acceso a esta página
          </h1>
        </div>
      </>
    ); // or return a loading spinner component
  }

  return <>{children}</>;
};

export default ProtectedRoute;
