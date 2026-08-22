const CartSummary = ({
  totalItems,
  subtotal,
  shippingFee,
  tax,
  total,
  onCheckout,
  onContinue,
}) => {
  return (
    <div className="bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b">
        <h2 className="text-xl font-bold">Order Summary</h2>

        <span className="text-sm text-gray-500">({totalItems} Items)</span>
      </div>

      {/* Details */}
      <div className="py-6 space-y-5">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Price</span>

          <span className="text-sm text-gray-500">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium">Shipping Fee</span>

          <span className="text-sm text-gray-500">
            ${shippingFee.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium">Tax (2%)</span>

          <span className="text-sm text-gray-500">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t pt-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Total Amount:</h3>

          <h3 className="text-xl font-bold">${total.toFixed(2)}</h3>
        </div>
      </div>

      {/* Checkout */}
      <button
        onClick={onCheckout}
        className="w-full bg-[#222] text-white py-4 mt-7 hover:bg-black transition"
      >
        Proceed to Delivery
      </button>

      {/* Continue Shopping */}
      <button
        onClick={onContinue}
        className="w-full text-sm text-gray-500 mt-3 py-2 hover:text-black"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CartSummary;
