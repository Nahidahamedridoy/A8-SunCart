'use client';

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">SunCart ☀️</h2>
          <p className="mt-3 text-sm">
            Your one-stop summer essentials store. Discover trendy outfits,
            sunglasses, skincare & more.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-400">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-orange-400">Products</Link>
            </li>
            <li>
              <Link href="/my-profile" className="hover:text-orange-400">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: nahidahamedridoy@gmail.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-orange-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;