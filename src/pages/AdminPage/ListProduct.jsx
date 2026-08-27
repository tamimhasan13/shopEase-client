import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const ListProduct = () => {
    const { products, currency, axios, setProducts } = useContext(AuthContext);
    const changeStock = async (productId, inStock) => {
      try {
        const { data } = await axios.post("/api/product/stock", {
          productId,
          inStock,
        });

        if (!data.success) {
          return toast.error(data.message);
        }
        toast.success(data.message);
        setProducts((prev) =>
          prev.map((product) =>
            product._id === productId ? { ...product, inStock } : product,
          ),
        );
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    };
    return (
      <div className="px-2 sm:px-6 py-12 m-2 h-[97vh] bg-gray-300 overflow-y-scroll lg:w-4/5 rounded-xl ">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[1fr_3.5fr_1fr_1fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
            <h5>Image</h5>
            <h5>Name</h5>
            <h5>Category</h5>
            <h5>Price</h5>
            <h5>InStock</h5>
          </div>
          {/* PRODUCT LIST */}
          {products.map((product) => (
            <div
              key={product._id}
              className="grid grid-cols-[1fr_3.5fr_1fr_1fr_1fr] items-center gap-2 p-2 bg-white rounded-lg"
            >
              <img
                src={product.image[0]}
                alt="productImg"
                className="w-12 rounded bg-primary"
              />
              <h5 className="text-sm font-semibold">{product.name}</h5>
              <p className="text-sm font-semibold">{product.category}</p>
              <div className="text-sm font-semibold">
                {currency}
                {product.offerPrice}
              </div>
              <div>
                <label className="relative inline-flex h-6 w-10 cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={product.inStock}
                    onChange={(e) => changeStock(product._id, e.target.checked)}
                  />

                  <div className="h-6 w-10 rounded-full bg-slate-300 transition-colors peer-checked:bg-green-500" />

                  <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-4" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ListProduct;