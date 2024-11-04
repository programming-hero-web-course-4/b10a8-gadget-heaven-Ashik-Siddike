import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

export default function GadgetCard({ product }) {
  const { addToCart, addToWishlist } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product);
    toast.success("Added to wishlist!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=Product";
          }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐</span>
            <span className="ml-1 text-gray-600">{product.rating}</span>
          </div>
          <p className="text-xl font-bold text-purple-600 mb-4">
            ${product.price}
          </p>

          <div className="flex space-x-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="p-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            >
              ❤️
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
