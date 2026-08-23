import { useLocation } from "react-router-dom";

const CartSummary = ({
  totalItems,
  subtotal,
  shippingFee,
  tax,
  total,
  paymentMethod,
  setPaymentMethod,
  onCheckout,
  onContinue,
}) => {
  const { pathname } = useLocation();

  const isPlaceOrderPage = pathname === "/place-order";

  return (
    <div className="bg-white p-6 sm:p-7">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-5">
        <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

        <span className="text-sm text-gray-500">({totalItems} Items)</span>
      </div>

      {/* Payment Method */}
      {isPlaceOrderPage && (
        <div className="border-b border-gray-200 py-5">
          <h3 className="mb-4 text-sm font-semibold text-gray-800">
            Payment Method
          </h3>

          <div className="flex gap-2">
            {/* Cash on Delivery */}
            <button
              type="button"
              onClick={() => setPaymentMethod("cash")}
              className={`h-10 flex-1 rounded-md border px-3 text-sm font-medium transition ${
                paymentMethod === "cash"
                  ? "border-gray-800 bg-gray-800 text-white"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400"
              }`}
            >
              Cash on Delivery
            </button>

            {/* Stripe */}
            <button
              type="button"
              onClick={() => setPaymentMethod("stripe")}
              className={`h-10 flex-1 rounded-md border px-3 text-sm font-medium transition ${
                paymentMethod === "stripe"
                  ? "border-gray-800 bg-gray-800 text-white"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400"
              }`}
            >
              Stripe
            </button>
          </div>
        </div>
      )}

      {/* Price Details */}
      <div className="space-y-5 py-6">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">Price</span>

          <span className="text-sm text-gray-500">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">
            Shipping Fee
          </span>

          <span className="text-sm text-gray-500">
            ${shippingFee.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">Tax (2%)</span>

          <span className="text-sm text-gray-500">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Total Amount:</h3>

          <h3 className="text-xl font-bold text-gray-900">
            ${total.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Checkout */}
      <button
        type="button"
        // onClick={() => onCheckout(paymentMethod)}
        onClick={onCheckout}
        className="mt-7 flex h-14 w-full items-center justify-center bg-gray-900 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.99]"
      >
        {isPlaceOrderPage ? "Proceed to Order" : "Proceed to Delivery"}
      </button>

      {/* Continue Shopping */}
      {!isPlaceOrderPage && (
        <button
          type="button"
          onClick={onContinue}
          className="mt-3 w-full py-2 text-sm text-gray-500 transition hover:text-black"
        >
          Continue Shopping
        </button>
      )}
    </div>
  );
};

export default CartSummary;
