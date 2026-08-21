import { useState } from "react";


const ProductDescription = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-12 border border-gray-200">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-4 text-sm font-medium border-b-2 ${
            activeTab === "description"
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("color")}
          className={`px-6 py-4 text-sm font-medium border-b-2 ${
            activeTab === "color"
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          Color Guide
        </button>

        <button
          onClick={() => setActiveTab("size")}
          className={`px-6 py-4 text-sm font-medium border-b-2 ${
            activeTab === "size"
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          Size Guide
        </button>
      </div>

      {/* Content */}
      <div className="p-6 text-gray-600 text-sm leading-6">
        {/* Description */}
        {activeTab === "description" && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Product Details
            </h4>

            <p className="mb-5">{product.description}</p>

            <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>

            <ul className="list-disc pl-5 space-y-1">
              <li>Premium quality materials for long-lasting durability.</li>
              <li>Comfortable design suitable for everyday use.</li>
              <li>Modern style that easily matches different outfits.</li>
              <li>Carefully finished for a clean and premium look.</li>
            </ul>
          </div>
        )}

        {/* Color Guide */}
        {activeTab === "color" && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Color Information
            </h4>

            <p className="mb-4">
              This product is available in carefully selected colors designed to
              complement different styles and preferences.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                Colors may look slightly different depending on your screen.
              </li>
              <li>Each color is selected to maintain a premium appearance.</li>
              <li>Please check the product images for available colors.</li>
            </ul>
          </div>
        )}

        {/* Size Guide */}
        {activeTab === "size" && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Size Guide</h4>

            <p className="mb-4">
              Choose your preferred size from the available options. For the
              best fit, compare the measurements with a similar item you already
              own.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-md">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="py-2">Size</th>
                    <th className="py-2">Recommended</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">S</td>
                    <td className="py-2">Small</td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="py-2">M</td>
                    <td className="py-2">Medium</td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="py-2">L</td>
                    <td className="py-2">Large</td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="py-2">XL</td>
                    <td className="py-2">Extra Large</td>
                  </tr>

                  <tr>
                    <td className="py-2">XXL</td>
                    <td className="py-2">Double Extra Large</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
