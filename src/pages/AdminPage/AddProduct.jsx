import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import upload_icon from "../../assets/upload_icon.png";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const AddProduct = () => {
    const {axios}=useContext(AuthContext);
  const [files, setFiles] = useState([]);
  const [sizes, setSizes] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: 10,
      offerPrice: 10,
      category: "Men",
      popular: false,
    },
  });

  // Size select/unselect
  const handleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size],
    );
  };

  // Image select
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);
  };

  // Submit
  const onSubmitHandler = async (data) => {
    try {
      // Size check
      if (sizes.length === 0) {
        toast.error("Please select at least one size");
        return;
      }

      // Image check
      const selectedImages = files.filter(Boolean);

      if (selectedImages.length === 0) {
        toast.error("Please select at least one image");
        return;
      }

      // Product data
      const productData = {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        offerPrice: Number(data.offerPrice),
        category: data.category,
        popular: data.popular,
        sizes: sizes,
      };

      // FormData
      const formData = new FormData();

      // Product data backend 
      formData.append("productData", JSON.stringify(productData));

      // Images backend 
      selectedImages.forEach((file) => {
        formData.append("images", file);
      });

      // API request
      const response = await axios.post("/api/product/add", formData);

      if (response.data.success) {
        toast.success(response.data.message);
        // Form reset
        reset();
        setFiles([]);
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full max-w-127.5"
      >
        {/* Product Name */}
        <div className="mb-3">
          <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
            Product Name
          </h5>

          <input
            {...register("name", {
              required: "Product name is required",
            })}
            type="text"
            placeholder="Write here..."
            className="h-8 w-full rounded border border-[#ddd] bg-white px-2.5 text-[12px] text-[#333] outline-none transition focus:border-[#222]"
          />

          {errors.name && (
            <p className="mt-1 text-[11px] text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Product Description */}
        <div className="mb-3">
          <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
            Product Description
          </h5>

          <textarea
            {...register("description", {
              required: "Product description is required",
            })}
            rows={5}
            placeholder="Write here..."
            className="block h-26.5 w-full resize-none rounded border border-[#ddd] bg-white px-2.5 py-2 text-[12px] text-[#333] outline-none transition focus:border-[#222]"
          />

          {errors.description && (
            <p className="mt-1 text-[11px] text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category / Price / Offer Price */}
        <div className="mb-3 flex items-start gap-3">
          {/* Category */}
          <div>
            <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
              Category
            </h5>

            <select
              {...register("category")}
              className="h-8 w-17.5 rounded border border-[#ddd] bg-white px-2 text-[12px] text-[#555] outline-none focus:border-[#222]"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
              <option value="Footwear">Footwear</option>
              <option value="Winterwear">Winterwear</option>
              <option value="Sportswear">Sportswear</option>
            </select>
          </div>

          {/* Product Price */}
          <div>
            <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
              Product Price
            </h5>

            <input
              {...register("price", {
                required: "Price is required",
                min: {
                  value: 1,
                  message: "Price must be greater than 0",
                },
              })}
              type="number"
              placeholder="10"
              className="h-8 w-21.25 rounded border border-[#ddd] bg-white px-2.5 text-[12px] text-[#333] outline-none focus:border-[#222]"
            />

            {errors.price && (
              <p className="mt-1 text-[11px] text-red-500">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Offer Price */}
          <div>
            <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
              Offer Price
            </h5>

            <input
              {...register("offerPrice", {
                required: "Offer price is required",
                min: {
                  value: 1,
                  message: "Offer price must be greater than 0",
                },
              })}
              type="number"
              placeholder="10"
              className="h-8 w-21.25 rounded border border-[#ddd] bg-white px-2.5 text-[12px] text-[#333] outline-none focus:border-[#222]"
            />

            {errors.offerPrice && (
              <p className="mt-1 text-[11px] text-red-500">
                {errors.offerPrice.message}
              </p>
            )}
          </div>
        </div>

        {/* Product Sizes */}
        <div className="mb-3">
          <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
            Product Sizes
          </h5>

          <div className="flex gap-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} onClick={() => handleSize(size)}>
                <span
                  className={`inline-flex h-6 min-w-7.25 cursor-pointer items-center justify-center rounded border border-[#e1e1e1] px-2 text-[12px] ${
                    sizes.includes(size)
                      ? "bg-[#292929] text-white"
                      : "bg-white text-[#666]"
                  }`}
                >
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="mb-3 flex gap-2">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <label
                key={index}
                htmlFor={`image${index}`}
                className="flex h-15 w-15 cursor-pointer items-center justify-center overflow-hidden rounded border border-[#eee] bg-white"
              >
                <input
                  onChange={(e) => handleImageChange(e, index)}
                  type="file"
                  id={`image${index}`}
                  accept="image/*"
                  hidden
                />

                <img
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : upload_icon
                  }
                  alt="upload"
                  width={60}
                  height={60}
                  className={`h-full w-full ${
                    files[index] ? "object-cover" : "object-contain p-4.15"
                  }`}
                />
              </label>
            ))}
        </div>

        {/* Popular */}
        <div className="mb-3 flex items-center gap-2">
          <input
            {...register("popular")}
            type="checkbox"
            id="popular"
            className="h-3.25 w-3.25 cursor-pointer accent-[#292929]"
          />

          <label
            htmlFor="popular"
            className="cursor-pointer text-[12px] text-[#444]"
          >
            Add to popular
          </label>
        </div>

        {/* Add Product */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 h-10.75 w-39 rounded bg-[#292929] text-[12px] font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
