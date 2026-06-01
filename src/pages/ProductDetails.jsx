import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabase";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    setProduct(data);
  }

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-3xl"
        />

        <div>
          <p className="text-yellow-400 mb-2">
            {product.category}
          </p>

          <h1 className="text-5xl mb-6">
            {product.name}
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            {product.description}
          </p>

          <a
            href={`https://wa.me/919731407313?text=Hello Style Bee Aura,%0A%0AI am interested in:%0A${product.name}%0A%0ACategory: ${product.category}%0A%0APlease share price and availability.`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-full inline-block mr-4"
          >
            Order on WhatsApp
          </a>

          <Link
            to="/collections"
            className="border border-white px-8 py-3 rounded-full inline-block"
          >
            Back
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;