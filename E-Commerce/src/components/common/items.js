import i18n from "./LangConfig";
let idCounter = 0;

export const ITEMS = [
  {
    id: String(idCounter++),
    imageSrc: "src/assets/car.svg",
    title: i18n.t("itemsArray.0.title"),
    price: 960,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    type: i18n.t("itemsArray.0.type"),
    details: i18n.t("itemsArray.0.details"), },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/camera.svg",
    title: i18n.t("itemsArray.1.title"),
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    type: i18n.t("itemsArray.1.type"),
    details:i18n.t("itemsArray.1.details"),},
  {
    id: String(idCounter++),
    imageSrc: "src/assets/dogfood.svg",
    price: 100,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    title: i18n.t("itemsArray.2.title"),
    type: i18n.t("itemsArray.2.type"),
    details: i18n.t("itemsArray.2.details"), 
  
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/labtop.svg",
    price: 700,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    title: i18n.t("itemsArray.3.title"),
    type: i18n.t("itemsArray.3.type"),
    details: i18n.t("itemsArray.3.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/cream.svg",
    price: 500,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    title: i18n.t("itemsArray.4.title"),
    type: i18n.t("itemsArray.4.type"),
    details: i18n.t("itemsArray.4.details"),},
  {
    id: String(idCounter++),
    imageSrc: "src/assets/g-black.svg",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.5.title"),
    type: i18n.t("itemsArray.5.type"),
    details: i18n.t("itemsArray.5.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/jacket.svg",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.6.title"),
    type: i18n.t("itemsArray.6.type"),
    details: i18n.t("itemsArray.6.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/bookself.svg",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.7.title"),
    type: i18n.t("itemsArray.7.type"),
    details: i18n.t("itemsArray.7.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/headphones.svg",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.8.title"),
    type: i18n.t("itemsArray.8.type"),
    details: i18n.t("itemsArray.8.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/bag.svg",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.9.title"),
    type: i18n.t("itemsArray.9.type"),
    details: i18n.t("itemsArray.9.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/coat.svg",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.10.title"),
    type: i18n.t("itemsArray.10.type"),
    details: i18n.t("itemsArray.10.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/g-colored.svg",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.11.title"),
    type: i18n.t("itemsArray.11.type"),
    details: i18n.t("itemsArray.11.details"),

  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/keyboard.svg",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 35,
    quantity: 0,
    title: i18n.t("itemsArray.12.title"),
    type: i18n.t("itemsArray.12.type"),
    details: i18n.t("itemsArray.12.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/tv.svg",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 30,
    quantity: 0,
    title: i18n.t("itemsArray.13.title"),
    type: i18n.t("itemsArray.13.type"),
    details: i18n.t("itemsArray.13.details"),

  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/chair.svg",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 25,
    quantity: 0,
    title: i18n.t("itemsArray.14.title"),
    type: i18n.t("itemsArray.14.type"),
    details: i18n.t("itemsArray.14.details"),
  },
  {
    id: String(idCounter++),
    imageSrc:"src/assets/JBL_BOOMBOX.svg",
    price: 1200,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: '',
    state:1,
    quantity: 0,
    title: i18n.t("itemsArray.15.title"),
    type: i18n.t("itemsArray.15.type"),
    details: i18n.t("itemsArray.15.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/perfume.svg",
    
    price: 1200,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: '',
    state:1,
    quantity: 0,
    title: i18n.t("itemsArray.16.title"),
    type: i18n.t("itemsArray.16.type"),
    details: i18n.t("itemsArray.16.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/phone.svg",
    price: 1200,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: '',
    state:1,
    quantity: 0,
    title: i18n.t("itemsArray.17.title"),
    type: i18n.t("itemsArray.17.type"),
    details: i18n.t("itemsArray.17.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/playstation.svg",
    price: 1200,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: '',
    state:1,
    quantity: 0,
    title: i18n.t("itemsArray.18.title"),
    type: i18n.t("itemsArray.18.type"),
    details: i18n.t("itemsArray.18.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/speakers.svg",
    price: 1200,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: '',
    state:1,
    quantity: 0,
    title: i18n.t("itemsArray.19.title"),
    type: i18n.t("itemsArray.19.type"),
    details: i18n.t("itemsArray.19.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/womenCollections.png",
    price: 1200,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: '',
    state:1,
    quantity: 0,
    title: i18n.t("itemsArray.20.title"),
    type: i18n.t("itemsArray.20.type"),
    details: i18n.t("itemsArray.20.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "src/assets/shoes.svg",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: '',
    state:1,
    quantity: 0,
    title: i18n.t("itemsArray.21.title"),
    type: i18n.t("itemsArray.21.type"),
    details: i18n.t("itemsArray.21.details"),
  },
];
