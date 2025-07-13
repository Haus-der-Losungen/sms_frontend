import { Carousel } from "@mantine/carousel";
import img1 from "../../assets/hero1.png";
import img2 from "../../assets/hero2.png";
import img3 from "../../assets/hero3.png";
import img4 from "../../assets/hero4.png";

const heroData = [
  {
    text1: "Fidif School Complex",
    text2: "Inspiring Excellence",
    image: img1,
  },
  {
    text1: "Grooming",
    text2: "Transformational Leaders.",
    image: img2,
  },
  {
    text1: "The road to success",
    text2: "Begins Here!",
    image: img3,
  },
  {
    text1: "Education with",
    text2: "Heart, Vission, and Results.",
    image: img4,
  },
];

function HeroWithCarousel() {
  return (
    <div className="relative z-0">
      <Carousel
        withIndicators
        height="100vh"
        className="h-[90vh]"
        controlSize={40}
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: "center",
        }}
        styles={{
          indicator: {
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#800125",
            transition: "background-color 150ms ease",
          },
          indicatorActive: {
            backgroundColor: "#800020",
          },
          control: {
            backgroundColor: "#800020",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#000000cc",
            },
          },
        }}
      >
        {heroData.map((data, index) => (
          <Carousel.Slide key={index}>
            <div
              className="relative h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-xl md:text-2xl mb-4 drop-shadow-md">
                  {data.text1}
                </h1>
                <p className="text-4xl md:text-6xl bg-[rgba(128,0,32,0.6)] rounded px-4 py-2 font-bold drop-shadow-lg">
                  {data.text2}
                </p>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroWithCarousel;
