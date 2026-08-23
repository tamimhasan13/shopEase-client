import { useContext, useEffect, useState } from "react";
import Title from "../../Components/Common/Title/Title";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { dummyOrders } from "../../assets/data";


const MyOrdersPage = () => {
    const {currency,user}=useContext(AuthContext);
    const [orders,setOrders]=useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
          const data = await Promise.resolve(dummyOrders);
          setOrders(data);
        };
  
        fetchProduct();
      }, [orders]);
      console.log(orders)
    return (
      <div className="max-padd-container py-16 pt-28 bg-gray-300">
        <Title title={"MyOrders"} title2={"List"} />
        {orders.map((order) => (
          <div key={order._id} className="bg-white p-2 pt-3 rounded-sm">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="text-gray-700 flex flex-col lg:flex-row gap-4 mb-3"
              >
                <div className="flex flex-2 gap-x3 ">
                  <div className="flexCenter bg-gray-300">
                    <img
                      src={item.product.image[0]}
                      alt="orderImg"
                      className="max-h-20 max-w--20 object-contain"
                    />
                  </div>
                  <div className="w-full block">
                    <h5 className="h5 capitalize line-clamp-1">
                      {item.product.name}
                    </h5>
                    <div className="flex flex-wrap gap-3 max-sm:gap-y-1 mt--1">
                      <div className="flex items-center gap-x-2">
                        <h5 className="medium-14">price:</h5>
                        <p>
                          {currency}
                          {item.product.offerPrice}
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t border-gray-300 pt-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">OrderId:</h5>
                  <p className="text-gray-400 text-xs break-all">{order._id}</p>
                </div>
                <div className="flex">
                  <div className="flex items-center gap-x-2">
                    <h5 className="medium-14">Payment Status:</h5>
                    <p className="text-gray-400 text-xs">
                      {order.isPaid ? "Done" : "Pending"}
                    </p>

                    <div className="flex items-center gap-x-2">
                      <h5 className="medium-14">Payment Method:</h5>
                      <p className="text-gray-400 text-xs">
                        {order.paymentMethod}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-x-2">
                    <h5 className="medium-14">Date:</h5>
                    <p className="text-gray-400 text-xs">
                      {new Date(order.createdAt).toDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <h5 className="medium-14">Amount:</h5>
                    <p className="text-gray-400 text-xs">
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
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <p>{order.status}</p>
                  </div>
                </div>
                <button
                  onClick={() => {}}
                  className="btn btn-secondary py-! text-xs! rounded-sm"
                >
                  Track Oder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default MyOrdersPage;