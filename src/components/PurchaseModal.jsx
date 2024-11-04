import { useNavigate } from "react-router-dom";

export default function PurchaseModal({ isOpen, onClose, total }) {
  const navigate = useNavigate();

  const handlePurchase = () => {
    onClose();
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
        <div className="text-center">
          <div className="bg-green-100 p-2 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Payment Successful</h3>
          <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
          <p className="font-semibold mb-4">Total: ${total.toFixed(2)}</p>
          <button
            onClick={handlePurchase}
            className="w-full bg-gray-100 py-2 rounded-lg text-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
