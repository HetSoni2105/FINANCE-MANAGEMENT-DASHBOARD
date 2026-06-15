// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Dashboard from "../Feature/dashboard/components/dashboard.jsx";
import History from "../Feature/History/components/History.jsx";
import Analytics from "../Feature/Analytics/components/Analytics.jsx";
import Export from "../Feature/Export/components/Export.jsx";
import Profile from "../Feature/Profile/components/Profile.jsx";
import Register from "../Feature/auth/components/Register.jsx";
import Login from "../Feature/auth/components/Login.jsx";
import { AuthContextProvider } from "../Feature/auth/components/AuthContext.jsx";

// ── new: a root wrapper that puts AuthContextProvider INSIDE the router ──
function RootProvider() {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
}

const router = createBrowserRouter([
  {
    element: <RootProvider />, // ← wraps EVERYTHING below
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, 
            element: <Navigate to="/login" replace /> },
          { 
            path: "dashboard", 
            element: <Dashboard /> 
          },
          { 
            path: "history", 
            element: <History /> 
          },
          { 
            path: "analytics", 
            element: <Analytics /> 
          },
          { 
            path: "export", 
            element: <Export /> 
          },
          { 
            path: "profile", 
            element: <Profile /> 
          },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
