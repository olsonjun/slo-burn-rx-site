const EmailSignup = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-100 text-gray-900 font-sans overflow-hidden flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
          Fitness That Fits <span className="text-pink-600">Real Life</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          I help ambitious women build strength, lean muscle, and long-term health—without restriction, burnout, or extremes.
        </p>
        <form
          action="https://formspree.io/f/xrbpnndb"
          method="POST"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="px-4 py-3 rounded-md text-gray-800 border border-gray-300 shadow-sm w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300"
          >
            Get the Free Guide
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignup;
