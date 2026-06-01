function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10 px-6 border-t border-gray-800">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>

          <h1 className="text-4xl font-light tracking-[6px] mb-4">
            SBA
          </h1>

          <p className="text-gray-400 leading-7">
            Fashion that defines you.
            Premium fashion collections for men & women.
          </p>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl mb-6 font-light">
            Contact
          </h2>

          <div className="space-y-4 text-gray-300">

            <p>
              📞 +91 97314 07313
            </p>

            <p>
              ✉️ stylebeeaura@gmail.com
            </p>

            <a
              href="https://www.instagram.com/style.bee_aura/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition"
            >
              📸 Instagram
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl mb-6 font-light">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-gray-300">

            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="hover:text-white transition">
              Collections
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">

        © 2026 STYLE BEE AURA. All Rights Reserved.

      </div>

    </footer>
  )
}

export default Footer