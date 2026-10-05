import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// Change this to false when you want to put the website in maintenance mode
const SITE_ENABLED = false;

export default function App() {

  // Maintenance mode
  if (!SITE_ENABLED) {
    return (
      <div className="min-h-screen bg-ink text-paper flex items-center justify-center px-6">
        <div className="text-center max-w-xl">

          <p className="eyebrow text-gold mb-4">
            SINGH & ASSOCIATES
          </p>

          <h1 className="font-display text-4xl md:text-6xl mb-6">
            We'll be back shortly.
          </h1>

          <div className="w-14 h-[2px] bg-gold mx-auto mb-6"></div>

          <p className="text-paper/70 text-lg leading-8 mb-8">
            Our website is currently undergoing maintenance.
            Please check back soon.
          </p>

        </div>
      </div>
    );
  }

  // Normal website
  return (
    <div className="min-h-screen flex flex-col">

      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<Terms />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />

    </div>
  );
}