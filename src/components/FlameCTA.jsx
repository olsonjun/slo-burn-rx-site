import { Link } from "react-router-dom";

const FlameCTA = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-rose-100 to-pink-50 text-gray-800 py-32 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-pink-600">
        This isn't a phase. It's a fire.
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Built to evolve. Structured to last. Personalized for how you actually move.
      </p>
      <Link to="/signup">
        <button className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition">
          Begin the Prescription
        </button>
      </Link>
    </section>
  );
};

export default FlameCTA;
