const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-white via-pink-50 to-rose-100 text-gray-800 px-6 py-24 font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-pink-600">Meet the Team Behind SLO Burn Rx</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We’ve combined clinical clarity, proven movement strategies, and real-world fitness experience to help you build strength for life—not just for a season.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-24">
        {/* Sienna */}
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-xl p-10 flex flex-col items-center text-center">
          <img
            src="/images/sienna.jpg"
            alt="Dr. Sienna Olson"
            className="w-72 h-72 rounded-full object-cover mb-6 shadow-xl border-4 border-white"
          />
          <h3 className="text-2xl font-heading font-bold mb-1 text-pink-500">Dr. Sienna Olson, D.C.</h3>
          <p className="text-sm text-gray-500 italic mb-6">Fitness & Wellness Expert | Founder of SLO Rx</p>
          <p className="text-gray-700 leading-relaxed text-base text-left max-w-xl">
            With a doctorate in chiropractic, a master’s in sports medicine, and over a decade of experience in the health and fitness space, I’ve made it my mission to help ambitious women reclaim their strength, energy, and confidence—without extremes.
            <br /><br />
            I specialize in strength training, sustainable fat loss, and longevity-focused wellness, grounded in what actually works—not just what’s trending.
          </p>
        </div>

        {/* Jonathan */}
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-xl p-10 flex flex-col items-center text-center">
          <img
            src="/images/jonathan.jpg"
            alt="Dr. Jonathan Olson"
            className="w-72 h-72 rounded-full object-cover mb-6 shadow-xl border-4 border-white"
          />
          <h3 className="text-2xl font-heading font-bold mb-1 text-pink-500">Dr. Jonathan Olson</h3>
          <p className="text-sm text-gray-500 italic mb-6">Movement Specialist | Co-Founder of SLO Rx</p>
          <p className="text-gray-700 leading-relaxed text-base text-left max-w-xl">
            As a chiropractor with advanced training in biomechanics and primary spine care, I specialize in helping driven individuals build strength that lasts—not just for performance, but for life.
            <br /><br />
            My style is direct, strategic, and grounded in what works. If you're done with quick fixes and ready to build strength with intention, you’ll fit right in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
