import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="bg-purple-700 text-white text-center min-h-[60vh] md:h-96 mb-32 md:mb-64 px-4 mt-16 rounded-b-3xl relative">
      <div className="container mx-auto py-8 md:py-0">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Upgrade Your Tech Game with Gadget Heaven
          </h2>
          <p className="mb-5 text-sm md:text-base max-w-xl mx-auto">
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-purple-700 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors"
          >
            Explore Now
          </button>
        </div>
      </div>
      
      <div className="w-[90%] md:w-2/3 mx-auto mt-8 md:mt-5 absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
        <div className="p-3 md:p-5 border-2 border-white rounded-xl">
          <img
            className="w-full h-48 md:h-96 rounded-xl object-cover"
            src="/banner.jpg"
            alt="Gadget Heaven Banner"
          />
        </div>
      </div>
    </section>
  );
}
