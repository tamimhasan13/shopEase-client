import { useContext, useEffect, useState } from "react";
import Title from "../../Components/Common/Title/Title";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const MyOrdersPage = () => {
  const { currency, user, userLoading, axios } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!user) return;
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/api/order/userOrders");
        if (data.success) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, [user, axios]);

  // Auth check 
  if (userLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  // Login 
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Please login to see your orders.</p>
      </div>
    );
  }

  return (
    <div className="max-padd-container bg-gray-300 py-16 pt-28">
      <Title title="MyOrders" title2="List" />

      {orders.length === 0 ? (
        <div className="mt-8 rounded-sm bg-white p-8 text-center">
          <p className="text-gray-500">You have no orders yet.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="rounded-sm bg-white p-2 pt-3">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="mb-3 flex flex-col gap-4 text-gray-700 lg:flex-row"
                >
                  <div className="flex flex-2 gap-x-3">
                    <div className="flexCenter bg-gray-300">
                      {item.product && (
                        <img
                          src={item.product.image?.[0]}
                          alt={item.product.name}
                          className="max-h-20 max-w-20 object-contain"
                        />
                      )}
                    </div>

                    <div className="block w-full">
                      <h5 className="h5 line-clamp-1 capitalize">
                        {item.product?.name || "Product unavailable"}
                      </h5>

                      <div className="mt-1 flex flex-wrap gap-3 max-sm:gap-y-1">
                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Price:</h5>
                          <p>
                            {currency}
                            {item.product?.offerPrice || 0}
                          </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Quantity:</h5>
                          <p>{item.quantity}</p>
                        </div>

                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Size:</h5>
                          <p>{item.size}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col items-start justify-between gap-4 border-t border-gray-300 pt-3 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-x-2">
                    <h5 className="medium-14">Order ID:</h5>
                    <p className="break-all text-xs text-gray-400">
                      {order._id}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Payment Status:</h5>
                      <p className="text-xs text-gray-400">
                        {order.isPaid ? "Done" : "Pending"}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Payment Method:</h5>
                      <p className="text-xs text-gray-400">
                        {order.paymentMethod}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Date:</h5>
                      <p className="text-xs text-gray-400">
                        {new Date(order.createdAt).toDateString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Amount:</h5>
                      <p className="text-xs text-gray-400">
                        {currency}
                        {order.amount}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <h4 className="medium-14">Status:</h4>

                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <p>{order.status}</p>
                    </div>
                  </div>

                  <button
                    onClick={async () => {
                      const { data } = await axios.get("/api/order/userOrders");

                      if (data.success) {
                        setOrders(data.orders);
                      }
                    }}
                    className="btn btn-secondary rounded-sm py-1! text-xs!"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
