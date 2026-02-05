import { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {product.map((e) => (
        <div key={e.id}>
          <img src={e.images[0]} alt={e.title} width={150} />
          <h3>{e.title}</h3>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;

// import { useEffect, useState } from "react";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [sort, setSort] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products);
//         setLoading(false);
//       });
//   }, []);

//   // get unique categories
//   const categories = ["all", ...new Set(products.map((p) => p.category))];

//   // search + filter + sort logic
//   const filteredProducts = products
//     .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
//     .filter((p) => (category === "all" ? true : p.category === category))
//     .sort((a, b) => {
//       if (sort === "low") return a.price - b.price;
//       if (sort === "high") return b.price - a.price;
//       return 0;
//     });

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Products...</h1>

//       {/* Controls */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search product"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select value={category} onChange={(e) => setCategory(e.target.value)}>
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <select value={sort} onChange={(e) => setSort(e.target.value)}>
//           <option value="">Sort by price</option>
//           <option value="low">Low to High</option>
//           <option value="high">High to Low</option>
//         </select>
//       </div>

//       {/* Products */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {filteredProducts.map((p) => (
//           <div key={p.id} style={{ border: "1px solid #ccc", padding: "15px" }}>
//             <img
//               src={p.thumbnail}
//               alt={p.title}
//               style={{ width: "100%", height: "150px", objectFit: "cover" }}
//             />
//             <h3>{p.title}</h3>
//             <p>{p.category}</p>
//             <p>
//               <strong>₹ {p.price}</strong>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
