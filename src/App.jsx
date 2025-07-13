import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Values from "./Components/Values/Values";
import HeroWithCarousel from "./Components/Hero";
import Footer from "./Components/Footer";
import PortalLogin from "./Pages/PortalLogin"; // the login page
import AboutUs from "./Pages/AboutUs"; // the about us page

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-sm z-30 md:hidden" />
      )}

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/"
          element={
            <>
              <HeroWithCarousel />
              <Values />
              <Footer />
            </>
          }
        />
        <Route path="/portal" element={<PortalLogin />} />
      </Routes>
    </div>
  );
};

export default App;
