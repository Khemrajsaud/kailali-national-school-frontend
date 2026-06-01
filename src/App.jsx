import React, { useState } from "react";
import axios from "axios";
import AppRoutes from "./components/routes/AppRoutes";
import { AdminThemeProvider } from "./contexts/AdminThemeContext";
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import LoadingScreen from "./components/LoadingScreen";

axios.defaults.withCredentials = true;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AdminAuthProvider>
      <AdminThemeProvider>
        {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
        <AppRoutes />
      </AdminThemeProvider>
    </AdminAuthProvider>
  );
};

export default App;
