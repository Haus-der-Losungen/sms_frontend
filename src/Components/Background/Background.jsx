import prefect from "../../assets/prefects.png";

const Background = () => {
  return (
    <img
      src={prefect}
      alt="Background"
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-red-600"
    />
  );
};

export default Background;
