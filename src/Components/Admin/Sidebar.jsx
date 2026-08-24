import {
  PackagePlus,
  Package,
  ShoppingCart,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const adminNavLinks = [
  {
    path: "/admin",
    label: "Add Product",
    icon: PackagePlus,
  },
  {
    path: "/admin/list",
    label: "Products List",
    icon: Package,
  },
  {
    path: "/admin/orders",
    label: "Orders",
    icon: ShoppingCart,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-full shrink-0 border-b border-gray-200 bg-white lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r">
      <div className="flex flex-col p-5 lg:min-h-screen">
        {/* Logo */}
        <Link
          to="/admin"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content">
            <ShoppingBag size={22} strokeWidth={2.2} />
          </div>

          <span className="text-xl font-bold tracking-tight sm:text-2xl">
            Shop<span className="text-primary">Ease</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:flex-1 lg:flex-col lg:items-stretch">
          {adminNavLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 sm:px-4 lg:w-full lg:px-4 lg:py-3 ${
                    isActive
                      ? "bg-primary text-primary-content shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                <Icon size={19} strokeWidth={2} />

                <span>{link.label}</span>
              </NavLink>
            );
          })}

          {/* Logout */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-red-500 sm:px-4 lg:mt-auto lg:w-full lg:px-4 lg:py-3"
          >
            <LogOut size={19} strokeWidth={2} />

            <span>Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
