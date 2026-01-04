import { useEffect } from "react";
import { useState } from "react";

const ProductsPage = () => {
  //state manage
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cat, setCat] = useState("");

  //product fetch calling
  useEffect(() => {
    fetchproduct();
  }, []);

  //product fetching
  const fetchproduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=20");
      if (!response.ok) throw new Error("fetch error");
      const result = await response.json();
      setProduct(result.products);
    } catch (error) {
      console.log(`Error msg ${error}`);
    }
  };

  const filterproduct = product
    .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort == "asc") return a.price - b.price;
      if (sort == "desc") return b.price - a.price;
      return 0;
    })
    .filter((p) => (cat ? p.category === cat : true));

  const catgorydata = [...new Set(product.map((p) => p.category))];

  return (
    <>
      <div>
        <h1>product</h1>

        <input
          type="text"
          placeholder="Search product..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select name="" id="" onChange={(e) => setSort(e.target.value)}>
          <option value="">Sorting ...</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <select name="" id="" onChange={(e) => setCat(e.target.value)}>
          <option value="">All Category</option>
          {catgorydata.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>

        {filterproduct.map((e, i) => (
          <div key={i}>
            <h1>{e.title}</h1>
            <img src={e.images[0]} alt="" width={250} />
            <p>{e.description}</p>
            <p>{e.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductsPage;

// import { useEffect, useState } from "react";

// const ProductsPage = () => {
//   //state manaage
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [cate, setCate] = useState("");

//   //fetch calling
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   //fetch product
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products?limit=20");
//       if (!response.ok) throw new Error("fetch not found");
//       const result = await response.json();
//       setProducts(result.products);
//     } catch (error) {
//       console.log("error msg", error);
//     }
//   };

//   //filtering product
//   const filteredProducts = products
//     .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => {
//       if (sort == "asc") return a.price - b.price;
//       if (sort == "desc") return b.price - a.price;
//       return 0;
//     })
//     .filter((p) => (cate ? p.category === cate : true));

//   const cat = [...new Set(products.map((p) => p.category))];

//   return (
//     <>
//       <div>
//         <h1>Products</h1>

//         <input
//           type="text"
//           placeholder="Search Products.."
//           onChange={(e) => setSearch(e.target.value)}
//           style={{ border: "1px solid white" }}
//         />

//         <select name="" id="" onChange={(e) => setSort(e.target.value)}>
//           <option value="">Select one..</option>
//           <option value="asc">Low to High</option>
//           <option value="desc">High to Low</option>
//         </select>

//         <select name="" id="" onChange={(e) => setCate(e.target.value)}>
//           <option value="">Select One..</option>
//           {cat.map((e, i) => (
//             <option value={e} key={i}>
//               {e}
//             </option>
//           ))}
//         </select>

//         {filteredProducts.map((e, i) => (
//           <div key={i}>
//             <img src={e.images?.[0]} alt="" width={200} />
//             <h1>{e.title}</h1>
//             <p>{e.description}</p>
//             <p>{e.price}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default ProductsPage;

// import { useEffect, useState } from "react";

// const ProductsPage = () => {
//   //state manage
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterCategory, setFilterCategory] = useState("");
//   const [sort, setSort] = useState("");

//   //fetch product calling
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   //calling fetch product
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("https://dummyjson.com/products?limit=20");
//       if (!res.ok) throw new console.Error("fectch failed");
//       const data = await res.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.log("error msg", error);
//     }
//   };

//   //search product
//   const filteredProducts = products
//     .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
//     .filter((p) => (filterCategory ? p.category == filterCategory : true))
//     .sort((a, b) => {
//       if (sort === "asc") return a.price - b.price;
//       if (sort === "desc") return b.price - a.price;
//       return 0;
//     });

//   const Categores = [...new Set(products.map((p) => p.category))];
//   return (
//     <>
//       <div>
//         <h1>Products</h1>
//         <input
//           style={{ border: "1px solid white" }}
//           type="text"
//           value={search}
//           placeholder="Search Product..."
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select onChange={(e) => setFilterCategory(e.target.value)}>
//           <option value="">All Categores</option>
//           {Categores.map((cat, i) => (
//             <option value={cat} key={i}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <select name="" id="" onChange={(e) => setSort(e.target.value)}>
//           <option value="">sort by price</option>
//           <option value="asc">low to high</option>
//           <option value="desc">high to low</option>
//         </select>

//         {filteredProducts.map((e, i) => (
//           <div key={i}>
//             <h1>{e.title}</h1>
//             <img src={e.images[0]} alt="" width={200} />
//             <p>{e.description}</p>
//             <p>Price: {e.price}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;

// import { useEffect, useState } from "react";

// const ProductsPage = () => {

//   //state manage
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [filterCategory, setFilterCategory] = useState("");
//   const [sortOrder, setSortOrder] = useState("");

//   //fetch product call
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   //product fetching
//   const fetchProducts = async () => {
//     setLoading(true);

//     try {
//       const res = await fetch("https://dummyjson.com/products?limit=20");
//       const data = await res.json();

//       // ⏱ YouTube-style delay (3 seconds)
//       setTimeout(() => {
//         setProducts(data.products);
//         setLoading(false);
//       }, 3000);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   //search and category and sort
//   const filteredProducts = products
//     .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
//     .filter((p) => (filterCategory ? p.category === filterCategory : true))
//     .sort((a, b) => {
//       if (sortOrder === "asc") return a.price - b.price;
//       if (sortOrder === "desc") return b.price - a.price;
//       return 0;
//     });

//   const categories = [...new Set(products.map((p) => p.category))];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Products</h1>

//       {/* Controls */}
//       {!loading && (
//         <div className="mb-6 space-y-4">
//           <input
//             type="text"
//             placeholder="Search product..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-3 py-2 w-full"
//           />

//           <div className="flex gap-4">
//             <select
//               onChange={(e) => setFilterCategory(e.target.value)}
//               className="border px-3 py-2"
//             >
//               <option value="">All Categories</option>
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>

//             <select
//               onChange={(e) => setSortOrder(e.target.value)}
//               className="border px-3 py-2"
//             >
//               <option value="">Sort by Price</option>
//               <option value="asc">Low → High</option>
//               <option value="desc">High → Low</option>
//             </select>
//           </div>
//         </div>
//       )}

//       {/* CONTENT */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {loading
//           ? Array.from({ length: 6 }).map((_, index) => (
//               <SkeletonCard key={index} />
//             ))
//           : filteredProducts.map((product) => (
//               <div key={product.id} className="border rounded-lg shadow p-4">
//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="w-full h-40 object-cover mb-3"
//                 />
//                 <h2 className="font-bold text-lg">{product.title}</h2>
//                 <p className="text-sm text-gray-600">{product.category}</p>
//                 <p className="mt-2 font-semibold">₹{product.price}</p>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// /* 🔥 YouTube-style Skeleton Card */
// const SkeletonCard = () => {
//   return (
//     <div className="border rounded-lg p-4 animate-pulse">
//       <div className="bg-gray-300 h-40 w-full rounded mb-4">Loading...</div>
//       <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
//       <div className="h-4 bg-gray-300 rounded w-1/4"></div>
//       <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
//       <div className="h-4 bg-gray-300 rounded w-1/4"></div>
//       <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
//       <div className="h-4 bg-gray-300 rounded w-1/4"></div>
//     </div>
//   );
// };

// export default ProductsPage;
