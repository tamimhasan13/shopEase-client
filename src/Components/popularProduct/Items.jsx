import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Items = ({ product }) => {
  const { addToCart }=useContext(AuthContext);
  const navigation = useNavigate();
  const [hovered, setHovered] = useState(false);
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50">
      {/* Product Image */}
      <div
        onClick={() => {
          navigation(
            `/collection/${product.category.toLowerCase()}/${product._id}`,
          );
          scrollTo(0, 0);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-t-2xl bg-[#f7f7f7]"
      >
        <img
          src={
            product.image.length > 1 && hovered
              ? product.image[1]
              : product.image[0]
          }
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/3" />

        {/* Sale Badge */}
        {product.price && product.price > product.offerPrice && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-md sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-[11px]">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="px-3.5 pb-4 pt-3.5 sm:px-5 sm:pb-5 sm:pt-4">
        {/* Category */}
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[1.3px] text-gray-400 sm:mb-1.5 sm:text-[11px] sm:tracking-[1.5px]">
          {product.category}
        </p>

        {/* Name */}
        <h4 className="line-clamp-1 text-[15px] font-semibold capitalize leading-6 text-gray-900 transition-colors duration-300 group-hover:text-red-500 sm:text-[17px]">
          {product.name}
        </h4>

        {/* Description */}
        <p className="mt-1 line-clamp-2 min-h-9 text-xs leading-5 text-gray-500 sm:mt-1.5 sm:min-h-10 sm:text-[13px]">
          {product.description}
        </p>

        {/* Price + Cart */}
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-gray-100 pt-3 sm:mt-4 sm:gap-3 sm:pt-4">
          {/* Price */}
          <div className="min-w-0">
            <p className="text-base font-bold tracking-tight text-gray-900 sm:text-xl">
              ${product.offerPrice}.00
            </p>

            {product.price && product.price > product.offerPrice && (
              <p className="mt-0.5 text-[10px] font-medium text-gray-400 line-through sm:text-xs">
                ${product.price}.00
              </p>
            )}
          </div>

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product._id)}
            type="button"
            className="shrink-0 rounded-lg bg-gray-900 px-2.5 py-2 text-[10px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-red-500 hover:shadow-md hover:shadow-red-500/20 active:scale-95 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-xs"
          >
            <span className="hidden xs:inline">Add to Cart</span>
            <span className="xs:hidden">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
