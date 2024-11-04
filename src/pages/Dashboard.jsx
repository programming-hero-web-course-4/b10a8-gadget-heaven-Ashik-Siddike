import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import PurchaseModal from "../components/PurchaseModal";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.search.includes("tab=wishlist") ? "wishlist" : "cart"
  );
  const [showModal, setShowModal] = useState(false);
  const { cart, wishlist, removeFromCart, removeFromWishlist, addToCart } =
    useCart();

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Sort cart items by price
  const [sortedCart, setSortedCart] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    setSortedCart(
      [...cart].sort((a, b) =>
        sortOrder === "desc" ? b.price - a.price : a.price - b.price
      )
    );
  }, [cart, sortOrder]);

  // Update active tab based on URL
  useEffect(() => {
    setActiveTab(
      location.search.includes("tab=wishlist") ? "wishlist" : "cart"
    );
  }, [location]);

  const handleSort = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  useEffect(() => {
    document.title = "GadgetHeaven - Dashboard";
  }, []);

  return (
    <div className="mt-16">
      {/* Header Section */}
      <header className="bg-purple-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Dashboard</h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "cart"
                  ? "bg-white text-purple-600"
                  : "bg-purple-500 border border-white"
              }`}
            >
              Cart ({cart.length})
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "wishlist"
                  ? "bg-white text-purple-600"
                  : "bg-purple-500 border border-white"
              }`}
            >
              Wishlist ({wishlist.length})
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "cart" && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">
                  Total:{" "}
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </p>
                <button
                  onClick={handleSort}
                  className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50"
                >
                  Sort by Price {sortOrder === "desc" ? "↓" : "↑"}
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  disabled={cart.length === 0}
                >
                  Purchase
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {sortedCart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "wishlist" && (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <button
                      onClick={() => {
                        addToCart(item);
                        removeFromWishlist(item.id);
                      }}
                      className="mt-2 px-4 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                      Move to Cart
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <PurchaseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        total={totalPrice}
      />
    </div>
  );
}
