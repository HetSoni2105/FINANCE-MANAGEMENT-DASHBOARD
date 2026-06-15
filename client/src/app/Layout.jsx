import React, { useContext } from "react";
import Sidebar from "../shared/components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import Login from "../Feature/auth/components/Login";
import Register from "../Feature/auth/components/Register";
function Layout() {
  
  return (
    <>
        <div className="flex min-h-screen m-1 border-black border-2">
          <Sidebar />
          <div className="border-amber-500 flex-1 flex flex-col">
            <Navbar />
            <main className="p-4 flex-1">
              <Outlet />
            </main>
          </div>
        </div>
    
    </>
  );
}

export default Layout;
