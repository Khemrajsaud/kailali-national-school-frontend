import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { apiUrl } from "../config/api";

const AdminAuthContext = createContext(null);

const AUTH_URL = apiUrl("/api/admin/auth");

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      try {
        const response = await axios.get(`${AUTH_URL}/me`);
        if (isMounted) {
          setAdmin(response.data?.admin || null);
        }
      } catch {
        if (isMounted) {
          setAdmin(null);
        }
      } finally {
        if (isMounted) {
          setCheckingSession(false);
        }
      }
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, []);

  const login = async (credentials) => {
    const response = await axios.post(`${AUTH_URL}/login`, credentials);
    setAdmin(response.data?.admin || null);
    return response.data;
  };

  const logout = async () => {
    try {
      await axios.post(`${AUTH_URL}/logout`);
    } finally {
      setAdmin(null);
    }
  };

  const value = useMemo(
    () => ({
      admin,
      isAuthenticated: Boolean(admin),
      checkingSession,
      login,
      logout,
    }),
    [admin, checkingSession]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }

  return context;
};

const AdminAuthLoading = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 text-white">
    <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-center shadow-2xl backdrop-blur-sm">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">Admin access</p>
      <p className="mt-3 text-lg font-semibold">Checking your session...</p>
    </div>
  </div>
);

export const RequireAdminAuth = () => {
  const { isAuthenticated, checkingSession } = useAdminAuth();
  const location = useLocation();

  if (checkingSession) {
    return <AdminAuthLoading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export const PublicAdminRoute = () => {
  const { isAuthenticated, checkingSession } = useAdminAuth();

  if (checkingSession) {
    return <AdminAuthLoading />;
  }

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
};