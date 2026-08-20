import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Searching:", search);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setSearch("");
    setIsOpen(false);
  };

  return (
    <div className="flex w-full justify-end">
      {/* Search Icon  */}
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open search"
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-700 transition-all duration-300 hover:bg-red-50 hover:text-red-500 ${
          isOpen
            ? "pointer-events-none scale-0 opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        <Search size={21} strokeWidth={2} />
      </button>

      {/* ================= Search Box ================= */}
      <form
        onSubmit={handleSubmit}
        className={`relative transition-all duration-500 ease-in-out ${
          isOpen
            ? "w-full scale-100 opacity-100"
            : "pointer-events-none w-0 scale-95 opacity-0"
        }`}
      >
        {/* Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          autoFocus={isOpen}
          className="h-11 w-full rounded-full border border-gray-200 bg-gray-50 pl-4 pr-20.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100"
        />

        {/* Clear Button */}
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-12 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-200 hover:text-gray-700"
            aria-label="Clear search"
          >
            <X size={15} />
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-white transition-all duration-300 hover:scale-105 hover:bg-red-600 active:scale-95"
          aria-label="Search"
        >
          <Search size={18} strokeWidth={2.2} />
        </button>

        {/* Close Search */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-white transition hover:bg-red-500"
          aria-label="Close search"
        >
          <X size={12} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
