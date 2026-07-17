import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Photos from "./pages/Photos";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Loader from "./components/Loader";

// Helper component to handle scroll-to-top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isFirstLoad) {
      return;
    }
    setLoading(true);
  }, [location.pathname]);

  const handleLoaderComplete = () => {
    setLoading(false);
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  };

  return (
    <>
      {loading && (
        <Loader 
          onComplete={handleLoaderComplete} 
          duration={isFirstLoad ? 2500 : 900} 
        />
      )}
      
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#FCFBF7]">
          {/* Navigation Bar */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating WhatsApp Widget */}
          <WhatsAppWidget />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
