import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const location = useLocation();
  const { cart, wishlist } = useCart();

  // Check if current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`${
        location.pathname === "/"
          ? "text-white bg-purple-700 rounded-t-3xl"
          : "bg-white text-black"
      } px-6 py-4 fixed top-0 w-full z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">GadgetHeaven</span>
        </Link>

        {/* Main Navigation */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className={`hover:underline ${isActive("/") ? "underline" : ""}`}
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
              Stats
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

        {/* Cart & Wishlist Badges */}
        <div className="flex items-center space-x-6">
          <Link
            to="/dashboard?tab=wishlist"
            className={`relative px-2 py-1 rounded-full ${
              location.pathname === "/"
                ? "bg-white text-purple-700 "
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
              location.pathname === "/"
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
    </nav>
  );
}
