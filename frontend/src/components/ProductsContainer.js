import React, { useEffect } from 'react';
import { fetchProducts } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';

function ProductsContainer() {
  const dispatch = useDispatch();
  const {
    products: { items: products, loading },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //console.log('products.length: ' + products.length + ', loading: ' + loading);
  //console.log(products);
  return (
    <div className="products-container row g-2">
      {!products.length && loading ? (
        <h1>loading...</h1>
      ) : (
        products.map(product => (
          <ProductCard product={product} key={product._id} />
        ))
      )}
    </div>
  );
}

export default ProductsContainer;
