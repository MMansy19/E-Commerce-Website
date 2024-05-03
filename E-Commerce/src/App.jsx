import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material"; // Import CircularProgress from MUI
import Header from "./components/Header/Header.jsx";
import TopHeader from "./components/TopHeader/TopHeader.jsx";
import { LangProvider } from "./context/LangContext";
// import i18n from "./components/common/LangConfig";
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
// import Category from "./Pages/Category";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SelectedProductProvider } from "./context/SelectedProductContext";

import { Fab } from "@mui/material";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Router>
      <div
        //  dir={i18n.t("dir")}
        className="font-poppins"
      >
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
                      <Route path="/:title" element={<Product />} />
                      {/* <Route path="/:type" element={<Category />} /> */}
                      <Route path="/*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                    {/* Scroll to top button */}
                    {showScrollButton && (
                      <div className="fixed bottom-5 md:bottom-10 right-[42%] md:right-20  z-10">
                        <Fab aria-label="scroll-to-top" onClick={scrollToTop}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 20V4M5 11L12 4L19 11"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Fab>
                      </div>
                    )}
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
