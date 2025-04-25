const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white/90 backdrop-blur shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
          <img src="/images/sienna.jpg" alt="Dr. Sienna Olson" className="w-36 h-36 rounded-full object-cover mb-4 shadow-md" />
          <h3 className="text-2xl font-bold mb-2 text-pink-500">Dr. Sienna Olson, D.C.</h3>
          <p className="text-sm text-gray-500 italic mb-4">Fitness & Wellness Expert | Founder of SLO Rx</p>
          <p className="text-gray-700 leading-relaxed text-left">
            With a doctorate in chiropractic, a master’s in sports medicine, and over a decade of experience in the health and fitness space, I’ve made it my mission to help ambitious women reclaim their strength, energy, and confidence—without extremes.<br /><br />
            I specialize in strength training, sustainable fat loss, and longevity-focused wellness, grounded in what actually works—not just what’s trending.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
          <img src="/images/jonathan.jpg" alt="Dr. Jonathan Olson" className="w-36 h-36 rounded-full object-cover mb-4 shadow-md" />
          <h3 className="text-2xl font-bold mb-2 text-pink-500">Dr. Jonathan Olson</h3>
          <p className="text-sm text-gray-500 italic mb-4">Movement Specialist | Co-Founder of SLO Rx</p>
          <p className="text-gray-700 leading-relaxed text-left">
            As a chiropractor with advanced training in biomechanics and primary spine care, I specialize in helping driven individuals build strength that lasts—not just for performance, but for life.<br /><br />
            My style is direct, strategic, and grounded in what works. If you're done with quick fixes and ready to build strength with intention, you’ll fit right in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
