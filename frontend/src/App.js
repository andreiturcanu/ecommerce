import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import ProductsContainer from "./components/ProductsContainer";
import axios from "axios";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios("/api/products")
      .then((response) => {
        const productsArr = response.data.products;
        setProducts(productsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="container mt-3">
        <ProductsContainer products={products} />
      </div>
    </>
  );
}

export default App;
