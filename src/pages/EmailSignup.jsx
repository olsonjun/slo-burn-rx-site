const EmailSignup = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-100 text-gray-900 font-sans overflow-hidden flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
          Feel Stronger, Live Longer, and Finally Feel Like You Again
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          The 5 strategies every woman needs to build strength, energy, and longevity—without extremes.
        </p>
        <p className="text-md text-gray-600 mb-10">
          Get instant access to our 30-minute training + downloadable habit tracker to help you take action today.
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
            Yes, I Want the Free Training + Tracker
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignup;
