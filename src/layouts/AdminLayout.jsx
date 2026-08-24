import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../context/AuthContext/AuthContext";
import AdminLogin from "../Components/Admin/AdminLogin";
import Sidebar from "../Components/Admin/Sidebar";

const AdminLayout = () => {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px]">
        {/* Sidebar */}
        <Sidebar />

        {/* Right Content */}
        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
