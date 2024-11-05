import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const { cart, wishlist } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if current route is active
  const isActive = (path) => location.pathname === path;

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`${
        isHomePage ? "bg-purple-700 text-white" : "bg-white text-black"
      } px-4 md:px-6 py-4 fixed top-0 w-full z-50`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            GadgetHeaven
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>

          {/* Desktop Menu */}
          <ul
            className={`hidden lg:flex space-x-8 text-lg font-medium ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`hover:underline ${
                  isActive("/") ? "underline" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`hover:underline ${
                  isActive("/dashboard") ? "underline" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className={`hover:underline ${
                  isActive("/statistics") ? "underline" : ""
                }`}
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:underline ${
                  isActive("/about") ? "underline" : ""
                }`}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Cart & Wishlist - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/dashboard?tab=wishlist"
              className={`relative px-2 py-1 rounded-full ${
                isHomePage
                  ? "bg-white text-purple-700"
                  : "bg-purple-700 text-white"
              }`}
            >
              <i className="fas fa-heart text-xl"></i>
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/dashboard"
              className={`relative px-2 py-1 rounded-full ${
                isHomePage
                  ? "bg-white text-purple-700"
                  : "bg-purple-700 text-white"
              }`}
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden mt-4 pb-4 ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            <ul className="space-y-4">
              <li>
                <Link to="/" className="block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="block">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="block">
                  Stats
                </Link>
              </li>
              <li>
                <Link to="/about" className="block">
                  About
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              {/* Mobile Cart & Wishlist */}
              <Link to="/dashboard?tab=wishlist" className="relative">
                <i className="fas fa-heart text-xl"></i>
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/dashboard" className="relative">
                <i className="fas fa-shopping-cart text-xl"></i>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
