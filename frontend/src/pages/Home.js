import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ProductsContainer from "../components/ProductsContainer";

export default function Home() {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  async function fetchData() {
    dispatch({ type: "TRIGGER_LOADING", payload: { loading: true } });
    try {
      const { data } = await axios("/api/products");
      dispatch({
        type: "RECEIVE_PRODUCTS_SUCCESS",
        payload: {
          items: data.products,
          error: null,
          loading: false,
        },
      });
    } catch ({ message }) {
      dispatch({
        type: "RECEIVE_PRODUCTS_FAILURE",
        payload: {
          error: message,
          loading: false,
        },
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(items)

  return (
    <div>
      <button onClick={() => fetchData()}>fetch</button>
      <ProductsContainer products={items} />
    </div>
  );
}
