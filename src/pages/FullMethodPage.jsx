const FullMethodPage = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 via-white to-pink-100 text-gray-800 px-6 py-32">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-4 text-pink-600">The Full Method</h2>
        <p className="text-gray-600 text-lg font-sans">
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

      {/* Expanded Explanation Section */}
      <div className="mt-20 max-w-3xl mx-auto text-center text-gray-700 font-sans">
        <h2 className="text-3xl font-heading font-bold mb-4 text-pink-700">What Makes Burn Bright Rx Different?</h2>
        <p className="text-lg mb-8">
          Our method is built on what actually works: real behavior change, science-backed systems, and clinical clarity—without extremes, burnout, or perfectionism.
        </p>

        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Coaching That Meets You Where You Are</h3>
            <p>
              We offer both one-on-one coaching and protocol-based programs—because not everyone needs (or wants) high-touch support from day one.
              If you're ready to be guided, our coaching helps you personalize, stay accountable, and build momentum with structure.
              If you're more of a self-starter, our pre-built protocols give you a clear, effective roadmap grounded in the same methods we use with our clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">A System That Grows With You</h3>
            <p>
              Burn Bright Rx isn’t just a plan—it’s a method built around core phases that adapt to your body and life.
              Whether you're rebuilding strength, resetting your metabolism, or learning to train for longevity, this system gives you the structure to evolve without starting over.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Backed by Science, Built for Real Life</h3>
            <p>
              This isn’t biohacking fluff. We apply evidence-based approaches to training, nutrition, and recovery—then filter them through what actually sticks in a busy life.
              We care about what’s proven, but we’re not afraid to break from outdated norms. 
              You’ll feel that balance of structure and flexibility in everything we teach.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg font-medium mb-4">Ready to go deeper?</p>
          <a
            href="#/signup"
            className="inline-block px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-pink-700 transition"
          >
            Get the Free Training + Tracker
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullMethodPage;
