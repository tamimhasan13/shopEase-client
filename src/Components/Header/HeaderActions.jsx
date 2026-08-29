import { useContext, useState } from "react";
import { ShoppingCart, User, Package, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const HeaderActions = ({ cartCount = 0}) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const {user,setUser,setCartItems,axios}=useContext(AuthContext);
  const navigate=useNavigate()

  // AuthContext  user

  const handleLogout =async () => {
    setProfileOpen(false);
   try {
      const response = await axios.post("/api/user/logout");

      if (response.data.success) {
        setUser(null);
        setCartItems({});
        toast.success(response.data.message || "Logout successful");
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };
    
 

  return (
    <div className="flex items-center gap-2">
      <Link
        to="/cart"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full text-gray-700 transition hover:bg-red-50 hover:text-red-500"
        aria-label="Shopping cart"
      >
        <ShoppingCart
          size={21}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        {/* Cart Badge */}
        {cartCount >=0 && (
          <span className="absolute -right-0.5 -top-0.5 flex 4.75 min-w-4.75 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        )}
      </Link>

      {/*  Profile */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setProfileOpen((prev) => !prev)}
          className="group flex items-center gap-2 rounded-full p-1.5 transition hover:bg-gray-100"
          aria-label="User menu"
          aria-expanded={profileOpen}
        >
          {/* User Image */}
          {user ? (
            user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-gray-200 transition duration-300 group-hover:ring-red-400"
              />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 ring-1 ring-gray-200 transition duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:ring-red-200">
                <User size={20} />
              </span>
            )
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-red-600"
            >
              Login
            </Link>
          )}
        </button>

        {/*Dropdown */}
        <div
          className={`absolute right-0 top-[calc(100%+12px)] w-57.5 origin-top-right rounded-xl border border-gray-100 bg-white p-2 shadow-xl transition-all duration-200 ${
            profileOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-95 opacity-0"
          }`}
        >
          {/* User Header */}
          <div className="border-b border-gray-100 px-3 py-3">
            <p className="text-sm font-semibold text-gray-800">
              {user?.displayName || "Welcome to ShopEase"}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              {user?.email || "Manage your account"}
            </p>
          </div>

          {/* My Orders */}
          <Link
            to="/my-orders"
            onClick={() => setProfileOpen(false)}
            className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-500"
          >
            <Package size={18} />
            My Orders
          </Link>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-500"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderActions;
