
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";
const ListProduct = () => {
  const { products, currency, axios, setProducts } =
    useContext(AuthContext);
  const changeStock = async (productId, inStock) => {
    try {
      const { data } = await axios.post("/api/product/stock", {
        productId,
        inStock,
      });
      
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      setProducts((prev) =>
        prev.map((product) =>
          product._id === productId
            ? { ...product, inStock }
            : product
        )
      );
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Failed to update stock"
      );
    }
  };

  return (
    <div className="px-2 sm:px-6 py-12 m-2 h-[97vh] bg-gray-300 overflow-y-scroll lg:w-4/5 rounded-xl">
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="grid grid-cols-[1fr_3.5fr_1fr_1fr_1fr] items-center py-2 px-2 bg-white rounded">
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>InStock</h5>
        </div>
        {/* Products */}
        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-[1fr_3.5fr_1fr_1fr_1fr] items-center gap-2 p-2 bg-white rounded-lg"
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-12 rounded"
            />
            <h5 className="text-sm font-semibold">
              {product.name}
            </h5>
            <p className="text-sm font-semibold">
              {product.category}
            </p>
            <p className="text-sm font-semibold">
              {currency}
              {product.offerPrice}
            </p>
            <label className="relative inline-flex h-6 w-10 cursor-pointer">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={product.inStock}
                onChange={(e) =>
                  changeStock(product._id, e.target.checked)
                }
              />
              <div className="h-6 w-10 rounded-full bg-slate-300 peer-checked:bg-green-500" />
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;

