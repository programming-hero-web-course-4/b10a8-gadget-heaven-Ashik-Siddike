import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GadgetHeaven</h3>
            <p className="text-gray-600">
              Your one-stop shop for all things tech. Discover the latest and
              greatest gadgets for your everyday needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-purple-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/?category=macbook" className="text-gray-600 hover:text-purple-600">
                  MacBook
                </Link>
              </li>
              <li>
                <Link to="/?category=iphone" className="text-gray-600 hover:text-purple-600">
                  iPhone
                </Link>
              </li>
              <li>
                <Link to="/?category=smart-watches" className="text-gray-600 hover:text-purple-600">
                  Smart Watches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@gadgetheaven.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Tech Street, Digital City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} GadgetHeaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
