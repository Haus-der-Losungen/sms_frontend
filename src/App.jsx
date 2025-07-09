import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Values from "./Components/Values/Values";
// import Background from "./Components/Background/Background";
import HeroWithCarousel from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-sm z-30 md:hidden" />
      )}
      <HeroWithCarousel />
      <Values />
      <Footer />
    </div>
  );
};

export default App;
