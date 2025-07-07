import { Cross, Book, Users } from "lucide-react";
import value1 from "../../assets/value1.jpg";
import value2 from "../../assets/value2.jpg";
import value3 from "../../assets/value3.jpg";

const cardData = [
  {
    image: value1,
    icon: <Cross size={40} />,
    text: "Spiritual Development",
  },
  {
    image: value2,
    icon: <Book size={40} />,
    text: "Academic Excellence",
  },
  {
    image: value3,
    icon: <Users size={40} />,
    text: "Socialization",
  },
];

const Values = () => {
  return (
   <section className="flex flex-col md:flex-row w-full h-[900px] md:h-[400px] px-4 py-8">

      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex-1 relative flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
   
          <div className="absolute inset-0 bg-black/50" />

        
          <div className="relative z-10 text-center px-4">
            <div className="mb-2">{card.icon}</div>
            <p className="text-lg md:text-xl font-semibold">{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Values;
