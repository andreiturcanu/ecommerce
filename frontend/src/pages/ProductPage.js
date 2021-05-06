import React, { useEffect } from 'react';
import { fetchProduct, selectProduct } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

export default function ProductPage(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const {
    products: { items: products },
    product: { details: product, loading },
  } = useSelector(state => state);

  function getProduct() {
    if (products.length && id) {
      const product = products.find(item => item._id === id);
      product && dispatch(selectProduct(product));
    } else if (id) {
      dispatch(fetchProduct(id));
    }
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {!products.length && loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          <div className="col-sm">
            <img src={product.image} className="img-thumbnail" alt=""></img>
          </div>
          <div className="col-sm">
            <h3 className="text-muted">{product.brand}</h3>
            <h2>{product.name}</h2>
            <h6>Rating: {product.rating}</h6>
            <h6>Reviews: {product.numReviews}</h6>
            <p>{product.description}</p>
            <h4 className="text-muted">$ {product.price}</h4>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-success" type="button">
                Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
