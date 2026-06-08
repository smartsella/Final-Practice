import { useEffect, useState } from "react";
import API from "./services/api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const response = await API.get("/");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>MERN CRUD Store</h1>

      <ProductForm
        fetchProducts={fetchProducts}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />

      <ProductList
        products={products}
        fetchProducts={fetchProducts}
        setEditingProduct={setEditingProduct}
      />
    </div>
  );
};

export default App;
