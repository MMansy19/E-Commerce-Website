import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material"; // Import CircularProgress from MUI
import Header from "./components/Header/Header.jsx";
import TopHeader from "./components/TopHeader/TopHeader.jsx";
import { LangProvider } from "./components/TopHeader/LangContext.jsx";
import i18n from "./components/TopHeader/LangConfig.jsx";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Payment from "./Pages/Payment.jsx";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SelectedProductProvider } from "./context/SelectedProductContext";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div dir={i18n.t("dir")} className="font-poppins">
        <LangProvider>
          <SelectedProductProvider>
            <CartProvider>
              <WishlistProvider>
                {isLoaded ? (
                  <React.Fragment>
                    <TopHeader />
                    <Header />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/account" element={<Account />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/login" element={<LogIn />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/:type/:title" element={<Product />} />
                      <Route path="/*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                  </React.Fragment>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "100vh",
                    }}
                  >
                    <CircularProgress color="secondary" size={64} />
                  </div>
                )}
              </WishlistProvider>
            </CartProvider>
          </SelectedProductProvider>
        </LangProvider>
      </div>
    </Router>
  );
}

export default App;
