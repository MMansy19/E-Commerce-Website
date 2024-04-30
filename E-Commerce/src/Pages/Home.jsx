/* eslint-disable react-refresh/only-export-components */
import Row1 from "../components/Home/Row1";
import Deal from "../components/Home/Deal";
import FlashSale from "../components/Home/FlashSale";
import BestSelling from "../components/Home/BestSelling";
import Categories from "../components/Home/Categories";
import Services from "../components/common/Services";
import AllProducts from "../components/Home/AllProducts";
import Featured from "../components/Home/Featured";
let idCounter = 0;
export const ITEMS = [
  {
    id: String(idCounter++),
    imageSrc: "./assets/car.svg",
    title: "Kids Electric Car",
    price: 960,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
    type: "games",
    details:
      "An exciting electric car for kids to drive around in style, providing hours of entertainment and fun.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/camera.svg",
    title: "CANON EOS DSLR Camera",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
    type: "electronics",
    details:
      "Capture stunning photos and videos with this professional-grade Canon DSLR camera, perfect for photography enthusiasts.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/dogfood.svg",
    title: "Breed Dry Dog Food",
    price: 100,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
    type: "other",
    details:
      "Nutritious dry dog food to keep your furry friend healthy and happy, made with high-quality ingredients.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/labtop.svg",
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
    type: "electronics",
    details:
      "Experience high-performance gaming with this ASUS FHD gaming laptop, featuring advanced graphics and smooth gameplay.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/cream.svg",
    title: "Curology Product Set",
    price: 500,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
    type: "other",
    details:
      "Achieve clear and healthy skin with the Curology product set, designed to address various skincare concerns effectively.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/g-black.svg",
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
    type: "games",
    details:
      "Enhance your gaming experience with the GP11 Shooter USB gamepad, featuring high-quality construction and precise controls.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/jacket.svg",
    title: "Quilted Satin Jacket",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
    type: "clothes",
    details:
      "Stay stylish and warm with this quilted satin jacket, perfect for adding a trendy touch to your outfit.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/bookself.svg",
    title: "Small Bookshelf",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
    type: "other",
    details:
      "Organize your books and decorative items neatly with this small bookshelf, designed to fit in compact spaces.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/headphones.svg",
    title: "RGB Liquid CPU Cooler",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
    type: "electronics",
    details:
      "Keep your CPU cool and enhance its performance with the RGB liquid CPU cooler, featuring efficient cooling technology.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/bag.svg",
    title: "Gucci Duffle Bag",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
    type: "clothes",
    details:
      "Travel in style with the Gucci duffle bag, crafted with premium materials and featuring a spacious design.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/coat.svg",
    title: "The North Coat",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
    type: "clothes",
    details:
      "Stay warm and fashionable with The North Coat, featuring a durable construction and timeless design.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/g-colored.svg",
    title: "HAVIT HV-G92 Gamepad",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
    type: "games",
    details:
      "Enjoy responsive and precise gaming controls with the HAVIT HV-G92 gamepad, designed for hours of gaming fun.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/keyboard.svg",
    title: "AK-900 Wired Keyboard",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 35,
    quantity: 1,
    type: "electronics",
    details:
      "Type with speed and accuracy using the AK-900 wired keyboard, featuring a durable construction and ergonomic design.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/tv.svg",
    title: "IPS LCD Gaming Monitor",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 30,
    quantity: 1,
    type: "games",
    details:
      "Immerse yourself in gaming with the IPS LCD gaming monitor, delivering vibrant visuals and smooth gameplay.",
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/chair.svg",
    title: "S-Series Comfort Chair",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 25,
    quantity: 1,
    type: "clothes",
    details:
      "Relax in comfort with the S-Series comfort chair, featuring ergonomic design and plush cushioning for long hours of sitting.",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col md:mx-32 mt-28">
      <Row1 />
      <FlashSale items={ITEMS} />
      <Categories />
      <BestSelling items={ITEMS} />
      <Deal />
      <AllProducts items={ITEMS} />
      <Featured />
      <Services />
    </div>
  );
};
export default Home;
