import Row1 from "../components/Home/Row1";
import FlashSale from "../components/Home/FlashSale";
import Services from "../components/common/Services";

const Home = () => {
  const items = [
    {
      imageSrc: "./src/assets/car.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/g92.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/tv.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/camera.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/car.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/g92.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/tv.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/camera.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/car.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/g92.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/tv.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/camera.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/car.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/g92.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/tv.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
    {
      imageSrc: "./src/assets/camera.svg",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 40,
    },
  ];
  return (
    <>
      <Row1 />
      <FlashSale items={items} />
      <Services />
    </>
  );
};
export default Home;
