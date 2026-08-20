import { useState } from "react";

import ProductFilterSidebar from "../../Components/productListing/ProductFilterSidebar";
import ProductGrid from "../../Components/productListing/ProductGrid";
import ProductToolbar from "../../Components/productListing/ProductToolbar";

import { popularProducts } from "../../data/productData";

const ProductListing = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* FILTER SIDEBAR */}
        <ProductFilterSidebar />

        {/* PRODUCT AREA */}
        <section className="min-w-0">
          <ProductToolbar
            productCount={popularProducts.length}
            viewMode={viewMode}
            onViewChange={setViewMode}
          />

          <ProductGrid products={popularProducts} viewMode={viewMode} />
        </section>
      </div>
    </main>
  );
};

export default ProductListing;
