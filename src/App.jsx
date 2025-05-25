import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"; // ✅ New helper
import Hero from "./components/Hero";
import PhraseStrip from "./components/PhraseStrip";
import RxMethod from "./components/RxMethod";
import FlameCTA from "./components/FlameCTA";
import AboutUs from "./pages/AboutUs";
import FullMethodPage from "./pages/FullMethodPage";
import EmailSignup from "./pages/EmailSignup";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop /> {/* ✅ Automatically scrolls to top on route change */}

      <header className="fixed top-0 left-0 w-full px-6 py-2 z-50 bg-white/95 backdrop-blur-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto relative h-16">
          <div className="text-xl font-heading font-bold tracking-tight text-pink-600">SLO BURN Rx</div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-pink-600 text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-5 text-sm md:text-base font-semibold uppercase font-sans tracking-wide text-pink-600">
            <Link to="/" className="hover:text-fuchsia-500">Home</Link>
            <Link to="/about" className="hover:text-fuchsia-500">About</Link>
            <Link to="/method" className="hover:text-fuchsia-500">The Method</Link>
            <Link to="/signup" className="hover:text-fuchsia-500">Resources</Link>
          </nav>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full flex flex-col items-start gap-4 px-6 pt-4 pb-6 text-sm font-semibold uppercase font-sans tracking-wide text-pink-700 bg-white/95 shadow-lg z-40">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-fuchsia-500">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-fuchsia-500">About</Link>
            <Link to="/method" onClick={() => setMenuOpen(false)} className="hover:text-fuchsia-500">The Method</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="hover:text-fuchsia-500">Resources</Link>
          </nav>
        )}
      </header>

      <main className="pt-[72px] font-sans">
        <Routes>
          <Route path="/" element={<><Hero /><PhraseStrip /><RxMethod /><FlameCTA /></>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/method" element={<FullMethodPage />} />
          <Route path="/signup" element={<EmailSignup />} />
        </Routes>
      </main>
    </Router>
  );
}
