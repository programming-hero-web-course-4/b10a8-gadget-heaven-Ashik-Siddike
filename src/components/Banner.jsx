import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="bg-purple-700 text-white text-center  py-16 px-4 mt-16 rounded-b-3xl">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Upgrade Your Tech Game with Gadget Heaven
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors"
        >
          Explore Now
        </button>
        <div className="p-5 border-2 border-white w-2/3 rounded-xl mx-auto mt-8">
          <img
            className="w-full h-2/3 rounded-xl"
            src="/banner.jpg"
            alt="Gadget Heaven Banner"
          />
        </div>
      </div>
    </section>
  );
}
