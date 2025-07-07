import prefect from "../../assets/prefects.png";

const Background = () => {
  return (
 <img
  src={prefect}
  alt="Background"
  className="fixed top-0 left-0 w-full h-screen object-cover z-[-1]"
/>

  );
};

export default Background;
