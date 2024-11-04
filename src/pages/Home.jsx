import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import CategorySidebar from "../components/CategorySidebar";
import GadgetCard from "../components/GadgetCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Loaded data:", data);
        if (data.products) {
          setProducts(data.products);
        } else {
          console.error("No products found in data");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.title = "GadgetHeaven - Home";
  }, []);

  const filteredProducts = category
    ? products.filter((p) => p.category.toLowerCase() === category)
    : products;

  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <CategorySidebar />
          </div>

          {/* Products Grid */}
          <div className="col-span-9">
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <GadgetCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
