// routes.js
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Product from "./Pages/Product";
import AllProducts from "./Pages/AllProducts";
import NotFound from "./Pages/NotFound";
import Category from "./Pages/Category";

const routes = [
  {
    path: "/",
    element: Layout,
    children: [
      { path: "", element: Home },
      { path: "contact", element: Contact },
      { path: "account", element: Account },
      { path: "about", element: About },
      { path: "signup", element: SignUp },
      { path: "login", element: LogIn },
      { path: "wishlist", element: Wishlist },
      { path: "cart", element: Cart },
      { path: "checkout", element: Checkout },
      { path: "payment", element: Payment },
      { path: "allProducts", element: AllProducts },
      { path: "category", element: Category },
      { path: "allProducts/:title", element: Product },
      { path: "*", element: NotFound },
    ],
  },
];

export default routes;
