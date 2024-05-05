import Home from "./Pages/Home.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Payment from "./Pages/Payment.jsx";
import Contact from "./Pages/Contact.jsx";
import Account from "./Pages/Account.jsx";
import About from "./Pages/About.jsx";
import SignUp from "./Pages/SignUp.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Product from "./Pages/Product.jsx";
import AllProducts from "./Pages/AllProducts.jsx";
import NotFound from "./Pages/NotFound.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/account", element: <Account /> },
  { path: "/about", element: <About /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <LogIn /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/payment", element: <Payment /> },
  { path: "/allProducts", element: <AllProducts /> },
  { path: "/allProducts/:title", element: <Product /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
