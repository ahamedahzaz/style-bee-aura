import { motion } from "framer-motion"
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex items-center justify-center relative overflow-hidden"
    >

      {/* Background */}
      <div
  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2070')] bg-cover bg-center opacity-40"
  style={{ pointerEvents: "none" }}
></div>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-4"
      >

        <p className="tracking-[6px] uppercase mb-4 text-sm">
          Luxury Fashion
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-light mb-6 leading-tight">
          STYLE BEE AURA
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Discover premium fashion collections for men and women.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
  <Link
  to="/collections"
  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
>
  Explore Collection
</Link>
  <a
    href="https://instagram.com/style.bee_aura"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
  >
    Instagram
  </a>
</div>
      </motion.div>

    </section>
  )
}

export default Hero;