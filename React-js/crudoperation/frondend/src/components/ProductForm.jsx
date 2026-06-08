import { useState, useEffect } from "react";
import API from "../services/api";

const ProductForm = ({ fetchProducts, editingProduct, setEditingProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        price: editingProduct.price,
        category: editingProduct.category,
      });
    } else {
      setFormData({
        name: "",
        price: "",
        category: "",
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingProduct) {
      await API.put(`/${editingProduct._id}`, formData);
      setEditingProduct(null);
    } else {
      await API.post("/", formData);
    }

    setFormData({
      name: "",
      price: "",
      category: "",
    });

    fetchProducts();
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
      {editingProduct && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ProductForm;
