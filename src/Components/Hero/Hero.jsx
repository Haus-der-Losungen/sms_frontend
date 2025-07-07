import { useEffect, useState } from "react";
import Background from "../Background/Background";

const Hero = ({ heroData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentHero = heroData[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <div className="relative w-full m-h-[80vh] flex flex-col items-center justify-center text-center z-20 px-4 overflow-hidden">


      <div className="z-10 text-white drop-shadow-lg">
        <h1 className="text-xl md:text-2xl mb-4">{currentHero.text1}</h1>
        <p className="text-4xl md:text-6xl font-bold">{currentHero.text2}</p>
      </div>
    </div>
  );
};

export default Hero;
