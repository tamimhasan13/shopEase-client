import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  TbHeart,
  TbShoppingBagPlus,
  TbStarFilled,
  TbStarHalfFilled,
  TbTruckDelivery,
} from "react-icons/tb";

import { AuthContext } from "../../context/AuthContext/AuthContext";
import ProductDescription from "../../Components/ProductDescription/ProductDescription";
import ProductFeatures from "../../Components/ProductFeatures/ProductFeatures";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";

const SIZE_ORDER = ["S", "M", "L", "XL", "XXL"];

const ProductDetailsPage = () => {
  const { products = [], currency, addToCart } = useContext(AuthContext);
  const { id } = useParams();

  const product = products.find((item) => item._id === id);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


  // Product image
  const mainImage = selectedImage || product?.image?.[0];

  // Sorted sizes
  const sortedSizes = [...(product?.sizes || [])].sort(
    (a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b),
  );

  // Product not found
  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f7] px-5">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Product not found</h2>

          <Link
            to="/collection"
            className="mt-4 inline-flex rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Back to Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f7f7f7]">
      {/* PRODUCT AREA */}
      <section className="max-padd-container pt-10 sm:pt-28 lg:pt-16">
        {/* Breadcrumb */}
        <div className="mb-7 flex flex-wrap items-center gap-1.5 text-[16px] text-gray-400">
          <Link
            to="/"
            className="transition-colors duration-200 hover:text-red-500"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/collection"
            className="transition-colors duration-200 hover:text-red-500"
          >
            Collection
          </Link>
          <span>/</span>
          <Link
            to={`/collection/${product.category}`}
            className="capitalize transition-colors duration-200 hover:text-red-500"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="max-w-62.5 truncate text-gray-500">
            {product.name}
          </span>
        </div>

        {/* MAIN PRODUCT */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1.35fr] xl:gap-9">
          {/*  PRODUCT IMAGES */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col-reverse gap-4 sm:flex-row">
              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto sm:w-20.5 sm:flex-col sm:overflow-visible">
                {product.image?.map((item, index) => {
                  const isActive = mainImage === item;

                  return (
                    <button
                      key={`${product._id}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(item)}
                      aria-label={`View product image ${index + 1}`}
                      className={`group flex h-17.5 w-17.5 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-gray-50 transition-all duration-300 sm:h-19.5 sm:w-19.5 ${
                        isActive
                          ? "border-red-500 ring-2 ring-red-100"
                          : "border-gray-100 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={item}
                        alt={`${product.name} ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Main Image */}
              <div className="group relative flex min-h-95 flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#fafafa] sm:min-h-125">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="h-full max-h-140 w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-105 sm:p-8"
                />
                {/* Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-600 shadow-sm">
                  Premium Quality
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
            {/* Category */}
            <p className="text-xs font-semibold uppercase tracking-[2px] text-red-500">
              {product.category}
            </p>

            {/* Product Name */}
            <h2 className="mt-2 text-xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-[34px]">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-amber-400">
                <TbStarFilled size={19} />
                <TbStarFilled size={19} />
                <TbStarFilled size={19} />
                <TbStarFilled size={19} />
                <TbStarHalfFilled size={19} />
              </div>

              <span className="text-sm text-gray-500">(22 Reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-5 flex flex-wrap items-end gap-3 border-b border-gray-100 pb-5">
              {product.price > product.offerPrice && (
                <span className="text-xl font-medium text-gray-400 line-through">
                  {currency}
                  {product.price}.00
                </span>
              )}

              <span className="text-3xl font-bold text-gray-900">
                {currency}
                {product.offerPrice}.00
              </span>

              {product.price > product.offerPrice && (
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-500">
                  Sale
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-[15px]">
              {product.description}
            </p>

            {/* Size */}
            {sortedSizes.length > 0 && (
              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-800">
                    Select Size
                  </h3>

                  {selectedSize && (
                    <span className="text-xs font-medium text-red-500">
                      Selected: {selectedSize}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {sortedSizes.map((item) => {
                    const isSelected = item === selectedSize;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedSize(item)}
                        className={`flex h-10 min-w-11 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-900"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Cart Actions */}
            <div className="mt-7 flex gap-3">
              <button
                onClick={() => addToCart(product._id,selectedSize)}
                type="button"
                className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500 active:scale-[0.98]"
              >
                Add To Cart
                <TbShoppingBagPlus
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>

              <button
                type="button"
                aria-label="Add to wishlist"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-500 active:scale-95"
              >
                <TbHeart size={21} />
              </button>
            </div>

            {/* Delivery */}
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm">
                <TbTruckDelivery size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Free Delivery
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  On orders over {currency}500
                </p>
              </div>
            </div>

            {/* Product Benefits */}
            <div className="mt-5 border-t border-gray-100 pt-5">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-gray-500">
                    Authenticity you can trust
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-gray-500">
                    Enjoy cash on delivery for your convenience
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-gray-500">
                    Easy returns and exchanges within 7 days
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA DETAILS */}
      <section className="max-padd-container py-12 sm:py-16">
        <ProductDescription product={product} />

        <ProductFeatures />

        <RelatedProducts product={product} id={id} />
      </section>
    </main>
  );
};

export default ProductDetailsPage;
