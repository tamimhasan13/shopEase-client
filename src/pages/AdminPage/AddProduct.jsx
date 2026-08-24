import { useState } from "react";

import upload_icon from "../../assets/upload_icon.png";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("10");
  const [offerPrice, setOfferPrice] = useState("10");
  const [category, setCategory] = useState("Men");
  const [popular, setPopular] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmitHandler} className="w-full max-w-127.5">
        {/* Product Name */}
        <div className="mb-3">
          <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
            Product Name
          </h5>

          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Write here..."
            className="h-8 w-full rounded border border-[#ddd] bg-white px-2.5 text-[12px] text-[#333] outline-none transition focus:border-[#222]"
          />
        </div>

        {/* Product Description */}
        <div className="mb-3">
          <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
            Product Description
          </h5>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            value={description}
            placeholder="Write here..."
            className="block h-26.5 w-full resize-none rounded border border-[#ddd] bg-white px-2.5 py-2 text-[12px] text-[#333] outline-none transition focus:border-[#222]"
          />
        </div>

        {/* Category / Price / Offer Price */}
        <div className="mb-3 flex items-start gap-3">
          {/* Category */}
          <div>
            <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
              Category
            </h5>

            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
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
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              value={price}
              placeholder="10"
              className="h-8 w-21.25 rounded border border-[#ddd] bg-white px-2.5 text-[12px] text-[#333] outline-none focus:border-[#222]"
            />
          </div>

          {/* Offer Price */}
          <div>
            <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
              Offer Price
            </h5>

            <input
              onChange={(e) => setOfferPrice(e.target.value)}
              type="number"
              value={offerPrice}
              placeholder="10"
              className="h-8 w-21.25 rounded border border-[#ddd] bg-white px-2.5 text-[12px] text-[#333] outline-none focus:border-[#222]"
            />
          </div>
        </div>

        {/* Product Sizes */}
        <div className="mb-3">
          <h5 className="mb-1.5 text-[13px] font-semibold text-[#292929]">
            Product Sizes
          </h5>

          <div className="flex gap-2">
            {/* S */}
            <div
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("S")
                    ? pre.filter((item) => item !== "S")
                    : [...pre, "S"],
                )
              }
            >
              <span
                className={`inline-flex h-6 min-w-7.25 cursor-pointer items-center justify-center rounded border border-[#e1e1e1] px-2 text-[12px] ${
                  sizes.includes("S")
                    ? "bg-[#292929] text-white"
                    : "bg-white text-[#666]"
                }`}
              >
                S
              </span>
            </div>

            {/* M */}
            <div
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("M")
                    ? pre.filter((item) => item !== "M")
                    : [...pre, "M"],
                )
              }
            >
              <span
                className={`inline-flex h-6 min-w-7.25 cursor-pointer items-center justify-center rounded border border-[#e1e1e1] px-2 text-[12px] ${
                  sizes.includes("M")
                    ? "bg-[#292929] text-white"
                    : "bg-white text-[#666]"
                }`}
              >
                M
              </span>
            </div>

            {/* L */}
            <div
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("L")
                    ? pre.filter((item) => item !== "L")
                    : [...pre, "L"],
                )
              }
            >
              <span
                className={`inline-flex h-6 min-w-7.25 cursor-pointer items-center justify-center rounded border border-[#e1e1e1] px-2 text-[12px] ${
                  sizes.includes("L")
                    ? "bg-[#292929] text-white"
                    : "bg-white text-[#666]"
                }`}
              >
                L
              </span>
            </div>

            {/* XL */}
            <div
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("XL")
                    ? pre.filter((item) => item !== "XL")
                    : [...pre, "XL"],
                )
              }
            >
              <span
                className={`inline-flex h-6 min-w-7.25 cursor-pointer items-center justify-center rounded border border-[#e1e1e1] px-2 text-[12px] ${
                  sizes.includes("XL")
                    ? "bg-[#292929] text-white"
                    : "bg-white text-[#666]"
                }`}
              >
                XL
              </span>
            </div>

            {/* XXL */}
            <div
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("XXL")
                    ? pre.filter((item) => item !== "XXL")
                    : [...pre, "XXL"],
                )
              }
            >
              <span
                className={`inline-flex h-6 min-w-7.25 cursor-pointer items-center justify-center rounded border border-[#e1e1e1] px-2 text-[12px] ${
                  sizes.includes("XXL")
                    ? "bg-[#292929] text-white"
                    : "bg-white text-[#666]"
                }`}
              >
                XXL
              </span>
            </div>
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
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0];
                    setFiles(updatedFiles);
                  }}
                  type="file"
                  id={`image${index}`}
                  hidden
                />

                <img
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : upload_icon
                  }
                  alt="uploadArea"
                  width={60}
                  height={60}
                  className={`h-full w-full ${
                    files[index] ? "object-cover" : "object-contain p-4.15"
                  }`}
                />
              </label>
            ))}
        </div>

        {/* Add to Popular */}
        <div className="mb-3 flex items-center gap-2">
          <input
            onChange={() => setPopular((prev) => !prev)}
            type="checkbox"
            checked={popular}
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
          className="mt-1 h-10.75 w-39 rounded bg-[#292929] text-[12px] font-medium text-white transition hover:bg-black"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
