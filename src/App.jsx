import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import PhraseStrip from "./components/PhraseStrip";
import RxMethod from "./components/RxMethod";
import FlameCTA from "./components/FlameCTA";
import AboutUs from "./pages/AboutUs";
import FullMethodPage from "./pages/FullMethodPage";
import EmailSignup from "./pages/EmailSignup";

export default function App() {
  return (
    <Router>
      <header className="fixed top-0 left-0 w-full px-6 py-4 z-50 flex justify-between items-center text-pink-600 bg-white/80 backdrop-blur">
        <div className="text-lg font-heading font-bold tracking-tight">SLO BURN Rx</div>
        <nav className="space-x-4 text-xs uppercase font-sans">
          <Link to="/" className="hover:text-fuchsia-500">Home</Link>
          <Link to="/about" className="hover:text-fuchsia-500">About</Link>
          <Link to="/method" className="hover:text-fuchsia-500">The Method</Link>
          <Link to="/signup" className="hover:text-fuchsia-500">Resources</Link>
        </nav>
      </header>
      <main className="pt-20 font-sans">
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

