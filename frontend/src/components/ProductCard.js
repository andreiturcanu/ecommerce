import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-truncate">{product.name}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <h6>Price: {product.price}</h6>
          <a href="/" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
