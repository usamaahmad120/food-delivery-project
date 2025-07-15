import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-orange-600 text-white mt-10">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">Food Express</h2>
          <p className="mt-4 text-gray-300">
            Fast, fresh, and delivered straight to your door. Order now and enjoy delicious meals!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {/* <li><a href="/" className="hover:text-blue-950">Home</a></li> */}
            <li><a href="/menu" className="hover:text-blue-950">Menu</a></li>
            <li><a href="/about" className="hover:text-blue-950">Category</a></li>
            <li><a href="/contact" className="hover:text-blue-950">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-blue-950 ">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="#"><FaTwitter size={24} /></a>
          </div>
          <p className="mt-4 text-gray-300">📞 +92 3449572884</p>
          <p className="text-gray-300">📧 support@foodexpress.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-950 text-center py-4 text-gray-100 text-sm">
        © {new Date().getFullYear()} Food Express. Developed By Usama
      </div>
    </footer>
  );
}

export default Footer;
