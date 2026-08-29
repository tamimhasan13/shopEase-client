import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Orders = () => {
  const { currency, axios } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  // Get all orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.post("/api/order/list");

        if (data.success) {
          setOrders(data.orders);
        } else {
          toast.error(data.message || "Failed to load orders");
        }
      } catch (error) {
        console.log("Orders fetch error:", error);

        toast.error(error.response?.data?.message || "Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [axios]);
  // Update order status
  const handleStatusChange = async (orderId, status) => {
    try {
      setUpdatingId(orderId);

      const { data } = await axios.post("/api/order/status", {
        orderId,
        status,
      });

      if (data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status } : order,
          ),
        );

        toast.success("Order status updated");
      } else {
        toast.error(data.message || "Failed to update status");
      }
    } catch (error) {
      console.log("Status update error:", error);

      toast.error(
        error.response?.data?.message || "Failed to update order status",
      );
    } finally {
      setUpdatingId(null);
    }
  };
  // Loading
  if (loading) {
    return (
      <div className="flex-1 min-w-0 px-2 sm:px-6 py-12 h-[97vh] bg-gray-300 overflow-y-scroll rounded-xl">
        <div className="flex min-h-100 items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-red-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1 min-w-0 px-2 sm:px-6 py-12 h-[97vh] bg-gray-300 overflow-y-scroll rounded-xl">
      {orders?.map((order) => (
        <div key={order._id} className="bg-white p-3 mb-4 rounded">
          {/* PRODUCT LIST */}
          {order.items?.map((item, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-4 mb-3">
              <div className="flex flex-2 gap-x-3">
                {/* Product Image */}
                <div className="flexCenter bg-primary rounded">
                  <img
                    src={item.product?.image?.[0]}
                    alt="orderedProductImg"
                    className="max-h-20 max-w-20 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="block w-full">
                  <h5 className="h5 capitalize line-clamp-1">
                    {item.product?.name || "Product unavailable"}
                  </h5>

                  <div className="flex flex-wrap gap-3 max-sm:gap-y-1 mt-1">
                    {/* Price */}
                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Price:</h5>
                      <p>
                        {currency}
                        {item.product?.offerPrice || 0}
                      </p>
                    </div>
                    {/* Quantity */}
                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Quantity:</h5>

                      <p>{item.quantity}</p>
                    </div>
                    {/* Size */}
                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Size:</h5>

                      <p>{item.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* ORDER SUMMARY */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 border-t border-gray-300 pt-3 mt-3">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-2 flex-1">
              {/* Order ID */}
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Order Id:</h5>
                <p className="text-xs break-all">{order._id}</p>
              </div>
              {/* Customer + Phone */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Customer:</h5>
                  <p className="text-xs">
                    {order.address?.firstName} {order.address?.lastName}
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Phone:</h5>
                  <p className="text-xs">{order.address?.phone}</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Address:</h5>
                <p className="text-xs">
                  {order.address?.street}, {order.address?.city},{" "}
                  {order.address?.state}, {order.address?.country},{" "}
                  {order.address?.zipCode}
                </p>
              </div>
              {/* Payment Status + Method */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Payment Status:</h5>
                  <p className="text-xs">{order.isPaid ? "Done" : "Pending"}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Method:</h5>
                  <p className="text-xs">{order.paymentMethod}</p>
                </div>
              </div>
              {/* Date + Amount */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Date:</h5>
                  <p className="text-xs">
                    {new Date(order.createdAt).toDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Amount:</h5>
                  <p className="text-xs">
                    {currency}
                    {order.amount}
                  </p>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE - STATUS */}
            <div className="flex items-start lg:items-center gap-2 min-w-fit">
              <h5 className="medium-14">Status:</h5>
              <select
                value={order.status}
                disabled={updatingId === order._id}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                className="text-xs font-semibold p-1 ring-1 rounded max-w-36 ring-slate-900/5 outline-none bg-transparent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              {/* Updating indicator */}
              {updatingId === order._id && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
              )}
            </div>
          </div>
        </div>
      ))}
      {/* No orders */}
      {orders.length === 0 && (
        <div className="flex min-h-100 items-center justify-center">
          <p className="text-gray-500">No orders found.</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
