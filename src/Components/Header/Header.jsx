import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Common/Logo/Logo";
import HeaderActions from "./HeaderActions";
import SearchBar from "./SearchBar";
const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Collection",
    path: "/collection",
  },
  {
    id: 3,
    name: "Testimonial",
    path: "/testimonial",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const location=useLocation();
   const [searchQuery, setSearchQuery] = useState("");
  

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-shop px-4 sm:px-6 lg:px-10">
        {/* Desktop / Main Header */}
        <div className="flex h-18 items-center justify-between gap-4">
          {/* Mobile Menu + Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>

            {/* Logo */}
            <Logo />
          </div>

          {/* Desktop Navigation*/}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-red-500 after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-red-500"
                      : "text-gray-700 hover:text-red-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden w-full max-w-90 lg:block">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {/*  Header Actions */}
          <HeaderActions cartCount={3} />
        </div>

        {/*  Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "max-h-125 opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile Search */}
          <div className="mb-4">
            <SearchBar />
          </div>

          {/* Mobile Navigation */}
          <nav className="rounded-xl border border-gray-100 bg-gray-50 p-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-[15px] font-medium text-gray-700 transition hover:bg-white hover:text-red-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <HeaderActions cartCount={3} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
