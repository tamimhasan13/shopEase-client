import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

import { AuthContext } from "../../context/AuthContext/AuthContext";
import Title from "../../Components/Common/Title/Title";

const CartPage = () => {
  const navigate = useNavigate();

  const {
    products,
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartCount,
    getCartAmount,
    Shipping_fee,
    Tax_rate,
  } = useContext(AuthContext);

  // Cart products
 const cartData = [];

 Object.entries(cartItems).forEach(([productId, sizes]) => {
   Object.entries(sizes).forEach(([size, quantity]) => {
     const product = products.find((item) => item._id === productId);

     if (product && quantity > 0) {
       cartData.push({
         product,
         size,
         quantity,
       });
     }
   });
 });


  const totalItems = getCartCount();
  const subtotal = getCartAmount();
  const tax = subtotal * Tax_rate;
  const total = subtotal + Shipping_fee + tax;

  if (cartData.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="max-padd-container py-16 pt-28">
        {/* Header */}
        <div className="mb-10">
          <Title title="Cart" title2="Overview" />
        </div>
        {/* Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-8 items-start">
          {/* LEFT */}
          <div>
            {/* Header */}
            <div className="hidden md:grid grid-cols-[minmax(0,1fr)_120px_60px] items-center bg-white/80 border border-gray-100 px-6 py-4 text-[11px] uppercase tracking-[0.12em] text-gray-400 font-semibold">
              <p>Product Details</p>

              <p className="text-center">Subtotal</p>

              <p className="text-center">Action</p>
            </div>

            {/* Items */}
            <div className="mt-2 space-y-3">
              {cartData.map((item) => (
                <CartItem
                  key={`${item.product._id}-${item.size}`}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>

            {/* Continue */}
            <button
              onClick={() => navigate("/collection")}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Continue Shopping
            </button>
          </div>

          {/* RIGHT */}
          <div className="xl:sticky xl:top-28">
            <CartSummary
              totalItems={totalItems}
              subtotal={subtotal}
              shippingFee={Shipping_fee}
              tax={tax}
              total={total}
              onCheckout={() => navigate("/place-order")}
              onContinue={() => navigate("/collection")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
