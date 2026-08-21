import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
      const value = e.target.value;
      setSearchQuery(value);
      const query = value.trim();
      if (query) {
        navigate(`/collection?search=${encodeURIComponent(query)}&page=1`, {
          replace: true,
        });
      } else {
        navigate("/collection?page=1", {
          replace: true,
        });
      }
  };

  // Search open / close
  const toggleSearch = () => {
        setIsOpen((prev) => !prev);
  };
  // Clear search
  const clearSearch = () => {
      setSearchQuery("");

      navigate("/collection?page=1", {
         replace: true,
      });
  };

  return (
    <div className="flex w-full justify-end">
      <div className="relative flex w-full items-center justify-end">
        {/* Search Box */}
        <div
          className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "w-full scale-100 opacity-100"
              : "pointer-events-none w-0 scale-95 opacity-0"
          }`}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search products..."
            autoFocus={isOpen}
            className="h-11 w-full rounded-full border border-gray-200 bg-gray-50 pl-4 pr-24 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100"
          />

          {/* Clear Button */}
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              className="absolute right-12 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-200 hover:text-gray-700"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Search Toggle Button */}
        <button
          type="button"
          onClick={toggleSearch}
          aria-label={isOpen ? "Close search" : "Open search"}
          className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-red-600 active:scale-95 ${
            isOpen ? "absolute right-1" : ""
          }`}
        >
          <Search size={18} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
