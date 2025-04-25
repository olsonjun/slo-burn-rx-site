import { Link } from "react-router-dom";

const PhraseStrip = () => {
  return (
    <div className="bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 text-white text-sm uppercase tracking-widest py-6 text-center animate-[pulse_5s_ease-in-out_infinite] flex flex-col items-center gap-3">
      <span>Your Burn. Your Tempo. Your Prescription. Your Power.</span>
      <Link to="/signup">
        <button className="bg-white text-pink-600 px-5 py-2 rounded-md font-semibold shadow hover:bg-pink-100 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default PhraseStrip;
