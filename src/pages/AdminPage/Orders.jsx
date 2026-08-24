import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { dummyOrders } from "../../assets/data";
const Orders = () => {
  const { currency } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await Promise.resolve(dummyOrders);
      setOrders(data);
    };
    fetchProduct();
  }, []);

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
                    src={item.product.image[0]}
                    alt="orderedProductImg"
                    className="max-h-20 max-w-20 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="block w-full">
                  <h5 className="h5 capitalize line-clamp-1">
                    {item.product.name}
                  </h5>

                  <div className="flex flex-wrap gap-3 max-sm:gap-y-1 mt-1">
                    {/* Price */}
                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Price:</h5>
                      <p>
                        {currency}
                        {item.product.offerPrice}
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
            {/* LEFT SIDE - ORDER DETAILS */}
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
                    {order.address.firstName} {order.address.lastName}
                  </p>
                </div>

                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Phone:</h5>
                  <p className="text-xs">{order.address.phone}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Address:</h5>
                <p className="text-xs">
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state}, {order.address.country},{" "}
                  {order.address.zipcode}
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
                  <p className="text-xs">{order.paymentMethods}</p>
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
                onChange={(e) => {
                  setOrders((prevOrders) =>
                    prevOrders.map((item) =>
                      item._id === order._id
                        ? { ...item, status: e.target.value }
                        : item,
                    ),
                  );
                }}
                className="text-xs font-semibold p-1 ring-1 rounded max-w-36 ring-slate-900/5 outline-none bg-transparent cursor-pointer"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
