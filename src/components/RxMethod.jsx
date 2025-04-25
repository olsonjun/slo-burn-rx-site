import { motion } from "framer-motion";

const RxMethod = () => {
  return (
    <section className="bg-gradient-to-b from-rose-100 via-pink-50 to-white px-6 py-32 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 font-serif text-pink-600">The SLO Burn Rx</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A progressive prescription rooted in strength, energy, and adaptability.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          { title: "Rx1: Reset", desc: "Metabolic recovery, stress modulation, and baseline restoration." },
          { title: "Rx2: Build", desc: "Strength and skill acquisition layered with progressive overload." },
          { title: "Rx3: Sustain", desc: "Long-game optimization through energy systems and lifestyle design." },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md border border-white/40 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xl font-bold text-pink-500 mb-2 tracking-tight">{item.title}</h3>
            <p className="text-sm text-gray-700 font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RxMethod;
