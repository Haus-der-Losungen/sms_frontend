import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Values from "./Components/Values/Values";
import HeroWithCarousel from "./Components/Hero";
import Footer from "./Components/Footer";
import PortalLogin from "./Pages/PortalLogin"; 
import Overview from "./Components/Overview";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isPortalPage = location.pathname.startsWith("/portal");

  return (

    <div className="min-h-screen">
   
      {!isPortalPage && (
        <>
          <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          {isSidebarOpen && (
            <div className="fixed inset-0 bg-white/40 backdrop-blur-sm z-30 md:hidden" />
          )}
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroWithCarousel />

           <div className="relative z-10 -mt-4">
        <Values />
        <Overview />
      </div>
            </>
          }
        />

        <Route path="/portal" element={<PortalLogin />} />
       
      </Routes>
      {!isPortalPage && <Footer />}
   
    </div>

  );
};

export default App;
