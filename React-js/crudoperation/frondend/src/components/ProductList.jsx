import API from "../services/api";

const ProductList = ({ products, fetchProducts, setEditingProduct }) => {
  const deleteProduct = async (id) => {
    await API.delete(`/${id}`);
    fetchProducts();
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>

          <button onClick={() => editProduct(product)}>Edit</button>
          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
