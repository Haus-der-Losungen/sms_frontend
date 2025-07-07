import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Values from "./Components/Values/Values";
import Background from "./Components/Background/Background";

const App = () => {
  const heroData = [
    { text1: "Fidif School Complex", text2: "Inspiring Excellence" },
    { text1: "Empowering Future Leaders", text2: "With Knowledge & Integrity" },
    { text1: "Discover. Learn. Grow.", text2: "Education at Its Best" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Background />
   
      <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

    
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-sm z-30 md:hidden" />
      )}

      <main className="relative z-10 transition-all duration-300 pt-[72px]">
        <Hero heroData={heroData} />
        <Values />
      </main>
    </div>
  );
};

export default App;
