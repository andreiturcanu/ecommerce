import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsContainer({ products }) {
  return (
    <div className="products-container row g-2">
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
    </div>
  );
}
