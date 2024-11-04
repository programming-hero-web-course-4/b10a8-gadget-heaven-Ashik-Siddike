import { Link, useLocation } from "react-router-dom";

const categories = [
  { id: 1, name: "All Products" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Phones" },
  { id: 4, name: "Accessories" },
  { id: 5, name: "Smart Watches" },
  { id: 6, name: "MacBook" },
  { id: 7, name: "iPhone" },
];

export default function CategorySidebar() {
  const location = useLocation();
  const currentCategory = new URLSearchParams(location.search).get("category");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={
                category.name === "All Products"
                  ? "/"
                  : `/?category=${category.name.toLowerCase()}`
              }
              className={`flex border-2 text-center space-x-3 p-3 rounded-lg hover:bg-purple-100 transition-colors ${
                currentCategory === category.name.toLowerCase() ||
                (!currentCategory && category.name === "All Products")
                  ? "bg-purple-700 text-purple-100"
                  : ""
              }`}
            >
              <span className="font-medium">{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
