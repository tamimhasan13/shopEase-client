import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Title from "../../Components/Common/Title/Title";
import Items from "../../Components/popularProduct/Items";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { SearchX } from "lucide-react";

const CollectionPage = () => {
  const { products = [] } = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const navigate = useNavigate();
  const productsPerPage = 10;

  // Search filter
  const filteredProducts = products.filter((product) => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return true;
        return product.name.toLowerCase().includes(query);
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + productsPerPage,
  );
  const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page);
        navigate(`/collection?${params.toString()}`);
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
  };

  return (
    <div className="max-padd-container bg-gray-300 py-16 pt-28">
      <Title title="All" title2="Product" para="" />
      {currentProducts.length > 0 ? (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {currentProducts.map((product) => (
              <Items key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm disabled:opacity-40"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`h-10 w-10 rounded-lg ${
                      currentPage === page
                        ? "bg-red-500 text-white"
                        : "border bg-white"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex min-h-112.5 items-center justify-center px-4">
          <div className="flex max-w-md flex-col items-center text-center">
            {/* Icon */}
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 shadow-sm">
              <SearchX className="h-10 w-10 text-red-500" strokeWidth={1.8} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-gray-800">
              No Products Found
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-gray-500">
              We couldn't find any products matching your search. Try another
              keyword or browse all our products.
            </p>

            {/* Button */}
            <button
              type="button"
              onClick={() => navigate("/collection?page=1")}
              className="mt-7 rounded-full bg-red-500 px-7 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-md active:translate-y-0"
            >
              Browse Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
