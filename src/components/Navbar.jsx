import { useState } from "react"
import logo from "../assets/logo.png"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full absolute top-0 left-0 z-50 px-6 md:px-10 py-6">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Style Bee Aura"
            className="w-20 md:w-24 object-contain"
          />

          <div>

            <h1 className="text-white text-sm md:text-lg tracking-[4px] font-light">
              STYLE BEE AURA
            </h1>

            <p className="text-gray-300 text-[10px] md:text-xs">
              Fashion that defines you
            </p>

          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white text-sm uppercase tracking-[3px]">

          <a href="#home" className="hover:text-gray-300 transition">
            Home
          </a>

          <a href="#collections" className="hover:text-gray-300 transition">
            Collections
          </a>

          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 bg-black/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-6 text-white uppercase tracking-[3px] text-sm">

          <a href="#home">
            Home
          </a>

          <a href="#collections">
            Collections
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar