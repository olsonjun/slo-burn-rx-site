import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-white via-pink-50 to-rose-100 text-gray-800 flex flex-col items-start justify-center px-6 md:pl-16 text-left overflow-hidden">
      
      {/* Sienna Watermark */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-floor.jpg"
          alt="Sienna Watermark"
          className="w-full h-full object-cover scale-105 opacity-55 mix-blend-soft-light transition duration-700"
        />
      </div>

      {/* Texture layer */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')] opacity-10 mix-blend-soft-light z-0"></div>

      {/* Radial gradient layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900 via-black to-black opacity-10 z-0"></div>

      <motion.h1
        className="text-7xl md:text-[7.5rem] font-heading font-bold tracking-tight leading-none z-10 text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SLO{" "}
        <span className="text-pink-500 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
          BURN Rx
        </span>
      </motion.h1>

      <motion.p
        className="text-xl font-sans text-gray-600 max-w-xl mt-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Ritualized training. Clinical clarity. Real fire.
      </motion.p>
    </section>
  );
};

export default Hero;
