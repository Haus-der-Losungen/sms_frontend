import { Cross, BookOpen, Users } from "lucide-react";
import value1 from "../../assets/value1.png";
import value2 from "../../assets/value2.png";
import value3 from "../../assets/value3.png";

const cardData = [
  {
    image: value1,
    icon: <Cross size={40} />,
    text: "Spiritual Development",
  },
  {
    image: value2,
    icon: <BookOpen size={40} />,
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
    <section className="grid grid-cols-1 md:grid-cols-3 font-abril w-full h-96 md:h-64">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative  flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute text-center inset-0 bg-[#800020]/50" />
          <div className="relative flex flex-col items-center ">
            <div className="mb-2">{card.icon}</div>
            <p className="text-lg md:text-xl font-semibold font-abril">{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Values;
