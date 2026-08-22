import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const { product, size, quantity } = item;

  const itemSubtotal = product.offerPrice * quantity;

  const increase = () => {
    updateQuantity(product._id, size, quantity + 1);
  };

const decrease = () => {
  updateQuantity(product._id, size, quantity - 1);
};

  const remove = () => {
    removeFromCart(product._id, size);
  };

  return (
    <div className="group bg-white border border-gray-100 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_120px_60px] items-center gap-4">
        {/* Product */}
        <div className="flex items-center gap-4">
          {/* Image */}
          <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-[#f6f6f4] shrink-0">
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 text-sm sm:text-[15px] leading-5">
              {product.name}
            </h3>

            <p className="text-xs text-gray-400 mt-1.5">
              Size: <span className="text-gray-700 font-medium">{size}</span>
            </p>

            <p className="text-xs text-gray-400 mt-1">
              ${product.offerPrice.toFixed(2)}
            </p>

            {/* Quantity */}
            <div className="inline-flex items-center mt-3 rounded-full border border-gray-200 overflow-hidden">
              <button
                onClick={decrease}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
              >
                <FaMinus className="text-[8px]" />
              </button>

              <span className="w-8 text-center text-xs font-medium">
                {quantity}
              </span>

              <button
                onClick={increase}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
              >
                <FaPlus className="text-[8px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="flex justify-between md:block md:text-center">
          <span className="text-xs text-gray-400 md:hidden">Subtotal</span>

          <span className="text-sm font-semibold text-gray-900">
            ${itemSubtotal.toFixed(2)}
          </span>
        </div>

        {/* Remove */}
        <div className="flex justify-end md:justify-center">
          <button
            onClick={remove}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition"
          >
            <IoClose className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
