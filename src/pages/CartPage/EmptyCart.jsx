import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold">
          Cart <span className="font-normal text-gray-500">Overview</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Explore our collection of stylish clothing and footwear made for
          comfort, quality, and everyday confidence.
        </p>

        <div className="bg-white mt-8 min-h-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Your cart is empty</h2>

            <p className="text-sm text-gray-500 mt-2">
              You haven't added anything to your cart yet.
            </p>

            <button
              onClick={() => navigate("/collection")}
              className="bg-[#222] text-white px-7 py-3 mt-6 text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
