import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import ProductCard from './ProductCard';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    console.log(this.props);
    const { items: products, loading } = this.props;
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
}

const mapStateToProps = ({ products: { items, loading } }) => ({
  items,
  loading,
});

const mapDispachToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(ProductsContainer);
