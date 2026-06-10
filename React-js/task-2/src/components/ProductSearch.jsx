import { useState } from "react";

const ProductSearch = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Mouse" },
    { id: 5, name: "Monitor" },
  ];

  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="page-card">
      <h2>Product Search</h2>

      <input
        className="form-input"
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length > 0 ? (
        <div className="item-list">
          {filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <h3>No Products Found</h3>
      )}
    </div>
  );
};

export default ProductSearch;
