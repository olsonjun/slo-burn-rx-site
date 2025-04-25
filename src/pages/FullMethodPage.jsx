const FullMethodPage = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 via-white to-pink-100 text-gray-800 px-6 py-32">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 font-serif text-pink-600">The Full Method</h2>
        <p className="text-gray-600 text-lg">
          The SLO Burn Rx isn’t a one-size-fits-all program — it’s a personalized, phased prescription rooted in strength, energy, and adaptability.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Rx1: Reset",
            description:
              "Metabolic recovery, nervous system reset, stress modulation, and foundational restoration. This phase prioritizes regulation over intensity."
          },
          {
            title: "Rx2: Build",
            description:
              "Layered strength and skill acquisition. Focused progressive overload with structured programming to build lean muscle and movement control."
          },
          {
            title: "Rx3: Sustain",
            description:
              "Energy system refinement, lifestyle design, and adaptability training for long-term results. Where systems thinking meets real-life sustainability."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/90 shadow-md rounded-xl p-6 text-left">
            <h3 className="text-xl font-bold text-pink-600 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullMethodPage;
