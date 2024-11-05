import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useCart } from "../context/CartContext";

import { toast } from "react-hot-toast";

export default function Details() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const { addToCart, addToWishlist, wishlist } = useCart();

  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("/data.json")
      .then((res) => res.json())

      .then((data) => {
        const foundProduct = data.products.find((p) => p.id === parseInt(id));

        setProduct(foundProduct);

        setLoading(false);
      })

      .catch((error) => {
        console.error("Error loading product:", error);

        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.id === parseInt(id)));
  }, [id, wishlist]);

  useEffect(() => {
    document.title = product
      ? `${product.title} - GadgetHeaven`
      : "Loading... - GadgetHeaven";
  }, [product]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="text-center text-red-600">Product not found</div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);

    toast.success("Added to cart!");
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);

    toast.success("Added to wishlist!");
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}

          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}

          <div className="space-y-4">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            {/* Price */}

            <p className="text-2xl font-bold text-purple-600">
              ${product.price}
            </p>

            {/* Availability */}

            <p className="text-lg inline-block bg-green-100 border border-green-600 rounded-full py-1 px-5">
              <span
                className={
                  product.availability ? "text-green-600" : "text-red-600"
                }
              >
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>
            </p>

            {/* Specifications */}

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Specifications:</h2>

              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Rating */}

            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-xl">⭐</span>

              <span className="ml-2 text-gray-600">{product.rating}</span>
            </div>

            {/* Actions */}

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.availability}
                className={`px-5 py-3 rounded-xl font-medium transition-colors ${
                  product.availability
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Add to Cart <i className="fas fa-shopping-cart text-xl"></i>
              </button>

              <button
                onClick={handleAddToWishlist}
                disabled={isInWishlist}
                className={`px-4 py-3 border rounded-full transition-colors ${
                  isInWishlist
                    ? "border-gray-300 bg-gray-100 text-gray-400"
                    : "border-purple-600 text-purple-600 hover:bg-purple-50 cursor-pointer"
                }`}
              >
                <i
                  className={`fas fa-heart text-xl ${
                    isInWishlist ? "opacity-50" : ""
                  }`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
