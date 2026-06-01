import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";

function CategoryProducts() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  async function fetchProducts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category.toUpperCase());

    if (error) {
      console.error(error);
    } else {
      setProducts(data);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl mb-10 uppercase">
        {category} Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] rounded-3xl overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl mb-2">
                {product.name}
              </h2>

              <p className="text-gray-400 mb-4">
                {product.description}
              </p>

              <a
                href="https://wa.me/919731407313"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-5 py-2 rounded-full inline-block"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;