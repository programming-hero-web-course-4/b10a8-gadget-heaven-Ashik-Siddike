import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    document.title = "GadgetHeaven - About Us";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About GadgetHeaven</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            GadgetHeaven was founded in 2024 with a simple mission: to provide tech enthusiasts with the latest and greatest gadgets at competitive prices. We believe that technology should be accessible to everyone, and our carefully curated selection reflects that philosophy.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We strive to be your trusted destination for all things tech. Our team of experts carefully selects each product, ensuring it meets our high standards for quality and value. We're committed to providing an exceptional shopping experience, backed by outstanding customer service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">Only the best products make it to our store</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Knowledgeable team ready to help</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick and reliable delivery</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-2">Email: support@gadgetheaven.com</p>
            <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p>
            <p className="text-gray-600">Address: 123 Tech Street, Digital City</p>
          </div>
        </div>
      </div>
    </div>
  );
} 