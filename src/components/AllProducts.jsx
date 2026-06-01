import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Link } from "react-router-dom";
function AllProducts() {
  const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (data) {
    setProducts(data);
  }
}

  return (
    <section id="all-products" className="bg-black text-white py-20 px-6">
      <h2 className="text-5xl text-center mb-12">
        All Collections
      </h2>
      <div className="max-w-5xl mx-auto mb-10">

  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full p-4 rounded-xl text-black mb-6"
  />

  <div className="flex flex-wrap gap-3 justify-center">

    <button
      onClick={() => setSelectedCategory("ALL")}
      className="bg-white text-black px-5 py-2 rounded-full"
    >
      ALL
    </button>

    <button
      onClick={() => setSelectedCategory("MEN")}
      className="bg-white text-black px-5 py-2 rounded-full"
    >
      MEN
    </button>

    <button
      onClick={() => setSelectedCategory("WOMEN")}
      className="bg-white text-black px-5 py-2 rounded-full"
    >
      WOMEN
    </button>

    <button
      onClick={() => setSelectedCategory("UNISEX")}
      className="bg-white text-black px-5 py-2 rounded-full"
    >
      UNISEX
    </button>

  </div>

</div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products
  .filter((product) => {
    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "ALL" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  })
  .map((product) => (
  <Link
    to={`/product/${product.id}`}
    key={product.id}
    className="bg-[#111] rounded-3xl overflow-hidden block hover:scale-105 transition duration-300"
  >
            <img
              src={product.image}
              alt={product.name}
              className="h-[400px] w-full object-cover"
            />

            <div className="p-5">
              <p className="text-yellow-400 text-sm mb-2">
                {product.category}
              </p>

              <h3 className="text-2xl mb-3">
                {product.name}
              </h3>

              <p className="text-gray-400">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AllProducts;