import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Header from "./components/Header/Header.jsx";
import TopHeader from "./components/TopHeader/TopHeader.jsx";
import { LangProvider } from "./components/TopHeader/LangContext.jsx";
import i18n from "./components/TopHeader/LangConfig.jsx";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist.jsx";
import Cart from "./Pages/Cart.jsx";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  return (
    <Router>
      <div dir={i18n.t("dir")} className="font-poppins">
        <LangProvider>
          <CartProvider>
            <WishlistProvider>
              <TopHeader />
              <Header />
              <div className="mt-32">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </LangProvider>
      </div>
    </Router>
  );
}

export default App;
