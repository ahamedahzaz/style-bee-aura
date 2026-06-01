import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

function CollectionSection() {

  
  const navigate = useNavigate()

  const products = [
  {
    id: 1,
    name: "Men's Collection",
    category: "MEN",
    description: "Premium men's fashion collection.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
  },

  {
    id: 2,
    name: "Women's Collection",
    category: "WOMEN",
    description: "Elegant women's fashion collection.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2070",
  },

  {
    id: 3,
    name: "Unisex Collection",
    category: "UNISEX",
    description: "Modern streetwear and lifestyle fashion.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974",
  },
]

  return (
   <section
  id="collections"
  className="bg-black text-white py-24 px-6"
>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <p className="tracking-[5px] uppercase text-sm text-gray-400 mb-3">
          New Collection
        </p>

        <h2 className="text-5xl font-light">
          Featured Fashion
        </h2>

      </motion.div>

      {/* Product Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {products.map((product) => (
          <motion.div
            key={product.id}
            onClick={() =>
  navigate(`/collection/${product.category.toLowerCase()}`)
}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
          >

            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="h-[450px] md:h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full">

              <p className="text-sm tracking-[3px] uppercase text-yellow-400 mb-2">
                {product.category}
              </p>

              <h3 className="text-2xl font-light mb-4">
                {product.name}
              </h3>

              {/* Buttons */}
              <div className="flex gap-3">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919731407313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  WhatsApp
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/style.bee_aura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Instagram
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    

    </section>
  )
}

export default CollectionSection