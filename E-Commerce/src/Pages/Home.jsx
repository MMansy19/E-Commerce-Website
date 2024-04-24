import Row1 from "../components/Home/Row1";
import FlashSale from "../components/Home/FlashSale";
import Services from "../components/common/Services";
const ITEMS = [
  {
    imageSrc: "./src/assets/car.svg",
    title: "Kids Electric Car",
    price: 960,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
  },
  {
    imageSrc: "./src/assets/camera.svg",
    title: "CANON EOS DSLR Camera",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
  },
  {
    imageSrc: "./src/assets/dogfood.svg",
    title: "Breed Dry Dog Food",
    price: 100,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
  },
  {
    imageSrc: "./src/assets/labtop.svg",
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
  },
  {
    imageSrc: "./src/assets/cream.svg",
    title: "Curology Product Set",
    price: 500,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
  },
  {
    imageSrc: "./src/assets/g-black.svg",
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
  },
  {
    imageSrc: "./src/assets/jacket.svg",
    title: "Quilted Satin Jacket",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
  },
  {
    imageSrc: "./src/assets/bookself.svg",
    title: "Small BookSelf",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
  },
  {
    imageSrc: "./src/assets/headphones.svg",
    title: "RGB liquid CPU Cooler",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
  },
  {
    imageSrc: "./src/assets/bag.svg",
    title: "Gucci duffle bag",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
  },
  {
    imageSrc: "./src/assets/coat.svg",
    title: "The north coat",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
  },
  {
    imageSrc: "./src/assets/g-colored.svg",
    title: "HAVIT HV-G92 Gamepad",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
  },
  {
    imageSrc: "./src/assets/keyboard.svg",
    title: "AK-900 Wired Keyboard",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 35,
  },
  {
    imageSrc: "./src/assets/tv.svg",
    title: "IPS LCD Gaming Monitor",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 30,
  },
  {
    imageSrc: "./src/assets/chair.svg",
    title: "S-Series Comfort Chair ",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 25,
  },
];
const Home = () => {
  return (
    <>
      <Row1 />
      <FlashSale items={ITEMS} />
      <Services />
    </>
  );
};
export default Home;
